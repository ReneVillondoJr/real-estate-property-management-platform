'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

type AdminLogoutProps = {
  className?: string;
};

export function AdminLogout({ className }: AdminLogoutProps) {
  const router = useRouter();

  const handleLogout = () => {
    window.localStorage.removeItem('real-estate-demo-user');
    window.dispatchEvent(new Event('real-estate-auth-change'));

    router.replace('/login');
  };

  return (
    <Button
      variant='outline'
      size='sm'
      onClick={handleLogout}
      className={className}
    >
      Sign out
    </Button>
  );
}
