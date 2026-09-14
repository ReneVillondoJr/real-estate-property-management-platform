'use client';

import { useEffect, useSyncExternalStore } from 'react';

import { usePathname, useRouter } from 'next/navigation';

type AdminAuthGuardProps = {
  children: React.ReactNode;
};

type DemoUser = {
  id: string;
  name: string;
  email: string;
  role: 'ADMIN';
};

const STORAGE_KEY = 'real-estate-demo-user';

function getSnapshot() {
  return window.localStorage.getItem(STORAGE_KEY);
}

function getServerSnapshot() {
  return null;
}

function subscribe(callback: () => void) {
  const handleStorage = () => {
    callback();
  };

  const handleCustomStorage = () => {
    callback();
  };

  window.addEventListener('storage', handleStorage);
  window.addEventListener('real-estate-auth-change', handleCustomStorage);

  return () => {
    window.removeEventListener('storage', handleStorage);

    window.removeEventListener('real-estate-auth-change', handleCustomStorage);
  };
}

function isValidAdminUser(value: string | null): boolean {
  if (!value) {
    return false;
  }

  try {
    const user = JSON.parse(value) as DemoUser;

    return Boolean(user.id && user.name && user.email && user.role === 'ADMIN');
  } catch {
    return false;
  }
}

export function AdminAuthGuard({ children }: AdminAuthGuardProps) {
  const router = useRouter();
  const pathname = usePathname();

  const storedUser = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const isAuthenticated = isValidAdminUser(storedUser);

  useEffect(() => {
    if (isAuthenticated) {
      return;
    }

    const callbackUrl = encodeURIComponent(pathname);

    router.replace(`/login?callbackUrl=${callbackUrl}`);
  }, [isAuthenticated, pathname, router]);

  if (!isAuthenticated) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-background'>
        <p className='text-sm text-muted-foreground'>
          Checking authentication...
        </p>
      </div>
    );
  }

  return children;
}
