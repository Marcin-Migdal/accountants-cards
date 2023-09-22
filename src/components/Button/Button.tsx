import React from "react";

import { ButtonProps } from "./interfaces";

import "./Button.css";

export const Button = ({ text, onClick, disabled = false, busy = false }: ButtonProps) => {
    return (
        <button className={`load-button ${busy ? "busy" : ""}`} onClick={(e) => onClick(e)} disabled={disabled || busy}>
            <p>{text}</p>
            <img className="spinner" src="/loading-icon.svg" alt="Loader Icon" />
        </button>
    );
};
