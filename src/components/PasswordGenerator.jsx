import React, { use } from "react";
import { useState } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const [generatedPassword, setGeneratedPassword] = useState("");

  const generatePassword = () => {
    let characterPool = "";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    if (includeLowercase) characterPool += lowercaseChars;
    if (includeUppercase) characterPool += uppercaseChars;
    if (includeNumbers) characterPool += numberChars;
    if (includeSymbols) characterPool += symbolChars;

    if (characterPool.length === 0) {
      alert("Lütfen en az bir karakter tipi seçiniz.");
      return;
    }

    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      password += characterPool[randomIndex];
    }
    setGeneratedPassword(password);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="text-2x1 font-bold mb-4 text-gray-800">
        Password Generator
      </h1>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-700"></label>
        <input
          type="number"
          min="4"
          max="50"
          value={length}
          onChange={(e) => {
            const value = Number(e.target.value);
            if (value >= 4 && value <= 50) {
              setLength(value);
            } else {
              alert("Lütfen 50'den fazla veya 4'ten az değer girmeyiniz.");
              setLength(4);
            }
          }}
          className="w-full text-gray-700 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mb-4 space-y-2">
        <label className="flex items-center space-x-2 text-gray-700">
          <input
            type="checkbox"
            className="accent-blue-500"
            checked={includeLowercase}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
          />
          <span>Küçük Harf (a-z)</span>
        </label>

        <label className="flex items-center space-x-2 text-gray-700">
          <input
            type="checkbox"
            className="accent-blue-500"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
          />
          <span>Büyük Harf (A-Z)</span>
        </label>

        <label className="flex items-center space-x-2 text-gray-700">
          <input
            type="checkbox"
            className="accent-blue-500"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          <span>Rakamlar (0-9)</span>
        </label>

        <label className="flex items-center space-x-2 text-gray-700">
          <input
            type="checkbox"
            className="accent-blue-500"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
          <span>Semboller (!@#$)</span>
        </label>
      </div>

      <button
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        onClick={generatePassword}
      >
        Generator
      </button>

      <div className="flex mt-4 bg-gray-100 p-3 rounded text-center items-center justify-center font-mono text-lg break-all text-red-500 min-h-[5rem]">
        {generatedPassword ? (
          <span className="text-red-500 selection:bg-gray-800 selection:text-white" >{generatedPassword}</span>
        ) : (
          <span className="text-gray-800 p-3 text-center items-center">
            Henüz şifre oluşturulmadı
          </span>
        )}
      </div>
    </div>
  );
}

export default PasswordGenerator;
