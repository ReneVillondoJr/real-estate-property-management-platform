'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

const STORAGE_KEY = 'real-estate-demo-user';

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

function getCallbackUrl() {
  const params = new URLSearchParams(window.location.search);

  return params.get('callbackUrl') || '/admin/dashboard';
}

export function useLogin() {
  const router = useRouter();

  const [email, setEmail] = useState('admin@morrowco.com');

  const [password, setPassword] = useState('admin123');

  const [error, setError] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const storedUser = window.localStorage.getItem(STORAGE_KEY);

    if (!isValidAdminUser(storedUser)) {
      return;
    }

    router.replace(getCallbackUrl());
  }, [router]);

  const login = () => {
    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password.');

      return;
    }

    setIsSubmitting(true);
    setError('');

    const demoUser = {
      id: 'demo-admin',
      name: 'Alex Morgan',
      email: email.trim(),
      role: 'ADMIN' as const,
    };

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(demoUser));

    window.dispatchEvent(new Event('real-estate-auth-change'));

    router.push(getCallbackUrl());
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    isSubmitting,
    login,
  };
}
