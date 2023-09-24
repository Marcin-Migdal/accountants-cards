import React from "react";

import "./SpinnerComponent.css";

interface SpinnerComponentProps {
    display?: boolean;
}

export const SpinnerComponent = ({ display = true }: SpinnerComponentProps) => {
    if (!display) return <></>;

    return <img className="spinner" src="/loading-icon.svg" alt="Loader Icon" />;
};
