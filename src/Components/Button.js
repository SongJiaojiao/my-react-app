import React from "react";

const Button = ({ 
  text, 
  icon, // React icon component
  onClick, 
  variant = "primary", // primary, secondary
  type = "text",       // text, icon
  disabled = false,
  className = ""
}) => {
  // Base button classes
  const baseClasses = "font-medium rounded-3xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  // Variant classes
  const variants = {
    primary: "bg-espresso-100 text-espresso-900 hover:bg-espresso-900 hover:text-white border border-espresso-300 ",
    secondary: "bg-espresso-900/10 text-expresso-900 hover:bg-espresso-900 hover:text-white backdrop-blur-sm "
  };
  
  // Type classes
  const types = {
    text: "px-6 py-3 text-base",
    icon: "p-3 w-12 h-12 flex items-center justify-center"
  };
  
  const buttonClasses = `${baseClasses} ${variants[variant]} ${types[type]} ${className}`;
  
  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {type === "icon" ? icon : text}
    </button>
  );
};

export default Button;