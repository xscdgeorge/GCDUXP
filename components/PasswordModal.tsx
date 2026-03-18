import React, { useState } from 'react';
import { X, Lock } from 'lucide-react';

interface PasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const PasswordModal: React.FC<PasswordModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '2knocks') {
      onSuccess();
      setPassword('');
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <Lock className="text-gray-900" size={32} />
          </div>
          
          <h2 className="text-2xl font-serif mb-2">Restricted Access</h2>
          <p className="text-gray-500 text-sm mb-8">
            This case study contains sensitive information. Please enter the access password to continue.
          </p>

          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Enter password"
                className={`w-full px-6 py-4 bg-gray-50 border-2 rounded-2xl outline-none transition-all ${
                  error ? 'border-red-500 bg-red-50' : 'border-transparent focus:border-black'
                }`}
                autoFocus
              />
              {error && (
                <p className="text-red-500 text-xs mt-2 font-medium">Incorrect password. Please try again.</p>
              )}
            </div>
            
            <button
              type="submit"
              className="w-full py-4 bg-black text-white rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-lg"
            >
              Unlock Project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
