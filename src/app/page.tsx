import { AuthRequiredError } from './lib/exceptions';
import Link from 'next/link';

const session = true;

export default function Home() {

  if (!session) throw new AuthRequiredError('Login ayin win lay nwar lr');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Learn Poke API with SWR */}

      <h1>This is an auth only page</h1>

      <Link href="/login">Go to Login Page</Link>
      <Link href="/user">Go to user page</Link>
      <Link href="/pokemon">Go to pokemon page</Link>
    </main>
  );
}
