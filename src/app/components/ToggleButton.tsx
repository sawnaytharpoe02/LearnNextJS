'use client';

import React, {useState} from 'react';
import { AuthRequiredError } from '../lib/exceptions';

const ToggleButton = () => {
  const [isBool, setIsBool] = useState<boolean>(true);

  if (!isBool)
    throw new AuthRequiredError(
      'Hey you must login first to access all users data'
    );
  return (
    <div>
      <button onClick={() => setIsBool(!isBool)} className='p-4 rounded-md bg-cyan-700'>
        Test User Custom Error Page
      </button>
    </div>
  );
};

export default ToggleButton;
