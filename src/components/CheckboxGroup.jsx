import CustomCheckbox from "./CustomCheckbox";

function CheckboxGroup({
  includeLowercase,
  setIncludeLowercase,
  includeUppercase,
  setIncludeUppercase,
  includeNumbers,
  setIncludeNumbers,
  includeSymbols,
  setIncludeSymbols,
}) {
  return (
    <div className="mb-4 space-y-2">
      <CustomCheckbox
        label="Lowercase (a-z)"
        checked={includeLowercase}
        onChange={setIncludeLowercase}
      />

      <CustomCheckbox
        label="Uppercase (A-Z)"
        checked={includeUppercase}
        onChange={setIncludeUppercase}
      />

      <CustomCheckbox
        label="Numbers (0-9)"
        checked={includeNumbers}
        onChange={setIncludeNumbers}
      />

      <CustomCheckbox
        label="Symbols (!@#$)"
        checked={includeSymbols}
        onChange={setIncludeSymbols}
      />
    </div>
  );
}

export default CheckboxGroup;
