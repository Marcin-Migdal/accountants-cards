import React from "react";

import { SpinnerComponent } from "../SpinnerComponent/SpinnerComponent";
import { ButtonProps } from "./interfaces";

import "./Button.css";

export const Button = ({ text, onClick, disabled = false, busy = false, display = true, style }: ButtonProps) => {
    if (!display) return <></>;

    return (
        <button style={style} className={`custom-button ${busy ? "busy" : ""}`} onClick={(e) => onClick(e)} disabled={disabled || busy}>
            <p>{text}</p>
            <SpinnerComponent />
        </button>
    );
};
