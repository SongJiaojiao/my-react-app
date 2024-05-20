import React from "react";
import '../index.css';

const Button = ({ text, onClick }) => {
    return (
        <button className="buttonRegular" onClick={onClick}>
            {text}
        </button>
    )
}

export default Button