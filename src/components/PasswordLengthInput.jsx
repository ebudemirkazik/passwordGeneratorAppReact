function PasswordLenghtInput({ length, setLength }) {
  const handleChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 4 && value <= 50) {
      setLength(value);
    } else {
      alert("Lütfen 4 ile 50 arasında bir değer giriniz.");
      setLength(12);
    }
  };

  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium text-gray-700">
        Password Length
      </label>
      <input
        type="number"
        min="4"
        max="50"
        value={length}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200 text-gray-700"
      />
    </div>
  );
}

export default PasswordLenghtInput;