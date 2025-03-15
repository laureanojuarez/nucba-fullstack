const Button = ({ children, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={` bg-blue-600 text-white rounded-lg hover:bg-gray-800 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
