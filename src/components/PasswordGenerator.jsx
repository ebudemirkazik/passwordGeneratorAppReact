import React, { use } from "react";
import { useState } from "react";
import PasswordLengthInput from "./PasswordLengthInput";
import CheckboxGroup from "./CheckboxGroup";
import PasswordOutput from "./PasswordOutput";
import GenerateButton from "./GenerateButton";
import CopyButton from "./CopyButton";

function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
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
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md ">
      <h1 className="text-2x1 font-bold mb-4 text-gray-800">
        Password Generator
      </h1>
      <PasswordLengthInput length={length} setLength={setLength} />
      <CheckboxGroup
        includeLowercase={includeLowercase}
        setIncludeLowercase={setIncludeLowercase}
        includeUppercase={includeUppercase}
        setIncludeUppercase={setIncludeUppercase}
        includeNumbers={includeNumbers}
        setIncludeNumbers={setIncludeNumbers}
        includeSymbols={includeSymbols}
        setIncludeSymbols={setIncludeSymbols}
      />

      <GenerateButton onClick={generatePassword} />

      <PasswordOutput generatedPassword={generatedPassword} />

      <CopyButton text={generatedPassword} />
    </div>
  );
}

export default PasswordGenerator;
