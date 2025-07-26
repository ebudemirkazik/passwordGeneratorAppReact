function PasswordOutput({ generatedPassword }) {
  return (
    <div className="flex mt-4 bg-gray-100 p-3 rounded text-center items-center justify-center font-mono text-lg break-all text-red-500 min-h-[5rem]">
      {generatedPassword ? (
        <span className="text-red-500 selection:bg-gray-800 selection:text-white">
          {generatedPassword}
        </span>
      ) : (
        <span className="text-gray-800 p-3 text-center items-center">
          Henüz şifre oluşturulmadı
        </span>
      )}
    </div>
  );
}


export default PasswordOutput;