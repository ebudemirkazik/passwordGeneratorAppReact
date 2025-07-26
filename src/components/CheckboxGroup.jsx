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
  );
}

export default CheckboxGroup;
