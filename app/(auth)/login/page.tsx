import LoginForm from '@/components/login/form';

export default function LoginPage() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-[var(--ink)] px-6'>
      <div>
        <LoginForm />
      </div>
    </div>
  );
}
