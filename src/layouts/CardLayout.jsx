const CardLayout = ({ title, children }) => {
  return (
    <div className="rounded-xl border border-gray-200 shadow-md p-4 bg-white w-full mx-auto">
      <div className="border-b border-gray-200 pb-2 mb-4 text-center">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default CardLayout;
