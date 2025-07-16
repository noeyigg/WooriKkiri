const RandomBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-3xs px-4 py-2 bg-blue-100 hover:bg-blue-200 hover:animate-bounce text-blue-800 rounded mb-4 cursor-pointer shadow-md transition-all duration-200"
    >
      자리뽑기!!
    </button>
  );
};

export default RandomBtn;
