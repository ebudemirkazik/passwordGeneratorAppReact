import React, { useState } from "react";

function SavedPasswords({ passwords, onClear }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    });
  };

  if (!passwords || passwords.length === 0) return null;

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Saved Passwords</h3>
      <button
        onClick={onClear}
        className="text-sm text-red-600 hover:underline"
      >
        Clear
      </button>
      <ul className="min-h-[160px] max-h-[160px] overflow-y-auto  space-y-1 text-sm text-gray-700  pr-1">
        {passwords.map((pass, idx) => (
          <li
            key={idx}
            className="bg-gray-100 p-2 rounded font-mono break-all"
            onClick={() => handleCopy(pass, idx)}
          >
            {copiedIndex === idx ? "Copied!" : pass}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SavedPasswords;
