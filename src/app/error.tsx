'use client';

import Link from 'next/link';

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="w-[600px] mx-auto">
      <h1 className="text-lg text-red-700">
        {error?.message || 'Something went wrong'}
      </h1>

      <div className="flex gap-4 mt-6 justify-center">
        <Link href="/" className="p-2 bg-cyan-400">
          Go Back Home
        </Link>
        <button className="p-2 bg-cyan-400">Try Again</button>
      </div>
    </div>
  );
};

export default error;
