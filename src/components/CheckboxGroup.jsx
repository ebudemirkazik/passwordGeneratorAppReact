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
        label="Küçük Harf (a-z)"
        checked={includeLowercase}
        onChange={setIncludeLowercase}
      />

      <CustomCheckbox
        label="Büyük Harf (A-Z)"
        checked={includeUppercase}
        onChange={setIncludeUppercase}
      />

      <CustomCheckbox
        label="Rakamlar (0-9)"
        checked={includeNumbers}
        onChange={setIncludeNumbers}
      />

      <CustomCheckbox
        label="Semboller (!@#$)"
        checked={includeSymbols}
        onChange={setIncludeSymbols}
      />
    </div>
  );
}

export default CheckboxGroup;
