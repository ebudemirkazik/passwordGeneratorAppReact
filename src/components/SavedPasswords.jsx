import React from "react";

function SavedPasswords({ passwords }) {
  if (!passwords || passwords.length === 0) return null;

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Kayıtlı Şifreler</h3>
      <ul className="md:max-h-60 space-y-1 text-sm text-gray-700 max-h-40 overflow-y-auto pr-1">
        {passwords.map((pass, idx) => (
          <li key={idx} className="bg-gray-100 p-2 rounded font-mono break-all">
            {pass}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SavedPasswords;
