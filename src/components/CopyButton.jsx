function CopyButton({ text }) {
  const handleCopy = () => {
    if (!text) {
      alert("Please generate a password first!");
      return;
    }

    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Password Copied!");
      })
      .catch((err) => {
        console.error("Copy Failed!", err);
      });
  };

  return (
    <div className="mt-3 flex rounded text-center items-center justify-center break-all min-h-[2rem]">
      <button
        onClick={handleCopy}
        className="bg-blue-600 text-white py-1 px-3 rounded space-y-2 hover:bg-blue-700 transition"
      >
        Copy Board
      </button>
    </div>
  );
}

export default CopyButton;
