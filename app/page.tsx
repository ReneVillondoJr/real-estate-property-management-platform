import PublicLayout from './(public)/layout';
import { Homepage } from '@/modules/homepage';

export default function Home() {
  return (
    <PublicLayout>
      <Homepage />
    </PublicLayout>
  );
}
