import { LoginForm } from '@/components/login/form';

export default function LoginPage() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-[var(--ink)] px-6'>
      <div className='w-full max-w-md bg-[var(--background)] p-8 lg:p-12'>
        <LoginForm />
      </div>
    </div>
  );
}
