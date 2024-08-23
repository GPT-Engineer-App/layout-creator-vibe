import React from 'react';
import { Button } from "@/components/ui/button";

const AuthToggle = ({ activeMethod, onToggle }) => {
  return (
    <div className="flex rounded-md overflow-hidden border border-gray-300 mb-4">
      <Button
        type="button"
        onClick={() => onToggle('magic-link')}
        className={`flex-1 rounded-none ${
          activeMethod === 'magic-link'
            ? 'bg-blue-500 text-white'
            : 'bg-white text-gray-700 hover:bg-gray-100'
        }`}
      >
        Magic Link
      </Button>
      <Button
        type="button"
        onClick={() => onToggle('password')}
        className={`flex-1 rounded-none ${
          activeMethod === 'password'
            ? 'bg-blue-500 text-white'
            : 'bg-white text-gray-700 hover:bg-gray-100'
        }`}
      >
        Password
      </Button>
    </div>
  );
};

export default AuthToggle;