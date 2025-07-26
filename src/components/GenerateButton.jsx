function GenerateButton ({onClick}) {
    return (
        <button
        onClick={onClick}
        className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
    >
        Generate Password
    </button>
    )
}

export default GenerateButton;