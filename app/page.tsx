import Image from 'next/image';
import { GoToGoogle } from './GoToGoogle';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GoToGoogle />
    </main>
  );
}
