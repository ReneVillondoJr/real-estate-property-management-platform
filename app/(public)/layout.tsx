import { QuestionerAI } from '@/components/QuestionerAI';
import { PublicNav } from '@/components/navigation/PublicNav';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='min-h-screen bg-background'>
      <PublicNav />
      {children}
      <QuestionerAI />
    </div>
  );
}
