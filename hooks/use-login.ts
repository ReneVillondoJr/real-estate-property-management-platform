'use client';

import { useEffect, useState, type FormEvent } from 'react';

import { useRouter } from 'next/navigation';

import {
  authChangeEvent,
  authStorageKey,
  defaultLoginValues,
  demoUser,
} from '../data/login';

function isValidAdminUser(value: string | null): boolean {
  if (!value) {
    return false;
  }

  try {
    const user = JSON.parse(value) as {
      id?: string;
      name?: string;
      email?: string;
      role?: string;
    };

    return Boolean(user.id && user.name && user.email && user.role === 'ADMIN');
  } catch {
    return false;
  }
}

function getCallbackUrl(): string {
  const params = new URLSearchParams(window.location.search);

  return params.get('callbackUrl') || '/admin/dashboard';
}

export function useLogin() {
  const router = useRouter();

  const [email, setEmail] = useState(defaultLoginValues.email);
  const [password, setPassword] = useState(defaultLoginValues.password);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 60);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const storedUser = window.localStorage.getItem(authStorageKey);

    if (!isValidAdminUser(storedUser)) {
      return;
    }

    router.replace(getCallbackUrl());
  }, [router]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Enter both your email and password to continue.');
      return;
    }

    setIsSubmitting(true);

    const user = {
      ...demoUser,
      email: email.trim(),
    };

    window.localStorage.setItem(authStorageKey, JSON.stringify(user));
    window.dispatchEvent(new Event(authChangeEvent));

    setTimeout(() => {
      setIsSubmitting(false);
      router.push(getCallbackUrl());
    }, 500);
  };

  return {
    email,
    password,
    showPassword,
    isSubmitting,
    error,
    mounted,
    setEmail,
    setPassword,
    setShowPassword,
    handleSubmit,
  };
}
