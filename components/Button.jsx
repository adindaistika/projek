const Button = ({ children }) => {
    return (
      <button
        className="text-xs bg-black py-2 px-5 rounded-md text-white font-semibold"
        type="submit">
        {children}
      </button>
    );
  };
  
  export default Button;