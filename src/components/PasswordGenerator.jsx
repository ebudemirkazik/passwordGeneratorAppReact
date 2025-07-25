

function PasswordGenerator() {
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
          className="w-full text-gray-700 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="mb-4 space-y-2">
        <label className="flex items-center space-x-2 text-gray-700">
          <input type="checkbox" className="accent-blue-500" />
          <span>Küçük Harf (a-z)</span>
        </label>

        <label className="flex items-center space-x-2 text-gray-700">
          <input type="checkbox" className="accent-blue-500" />
          <span>Büyük Harf (A-Z)</span>
        </label>

        <label className="flex items-center space-x-2 text-gray-700">
          <input type="checkbox" className="accent-blue-500" />
          <span>Rakamlar (0-9)</span>
        </label>

        <label className="flex items-center space-x-2 text-gray-700">
          <input type="checkbox" className="accent-blue-500" />
          <span>Semboller (!@#$)</span>
        </label>
      </div>

      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
        Generator
      </button>
    </div>
  );
}

export default PasswordGenerator;
