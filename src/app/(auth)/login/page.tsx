'use client';

import React, { useState } from 'react';
import { AuthRequiredError } from '@/app/lib/exceptions';

const page = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  if (!isLogin)
    throw new AuthRequiredError('Access source page after logging in');

  return (
    <div>
      <h1>Login Page</h1>

      <button
        onClick={() => setIsLogin(!isLogin)}
        className="bg-cyan-400 rounded-lg p-4">
        Toggle status login user
      </button>
    </div>
  );
};

export default page;
