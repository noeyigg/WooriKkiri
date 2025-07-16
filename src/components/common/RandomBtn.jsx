const RandomBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-3xs px-4 py-2 bg-blue-500 hover:bg-blue-600 hover:animate-bounce text-white rounded mb-4 cursor-pointer shadow-md transition-all duration-200"
    >
      자리뽑기!!
    </button>
  );
};

export default RandomBtn;
