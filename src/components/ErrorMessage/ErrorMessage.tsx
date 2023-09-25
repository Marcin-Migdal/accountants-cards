import React from "react";

import { STATUS } from "../../hooks/useGetUsers/interfaces";
import { Button } from "../Button";

import "./ErrorMessage.css";

export const ErrorMessage = ({ status, getAccountantsOnError }: any) => {
    if (status !== STATUS.ERROR && status !== STATUS.LOADING_ON_ERROR) return <></>;

    return (
        <>
            <div className="error-card">
                <span> Wystąpił problem, spróbuj ponownie </span>
                <img src="/error-icon.svg" alt="Loader Icon" />
            </div>
            <Button busy={status === STATUS.LOADING_ON_ERROR} onClick={getAccountantsOnError} text="Spróbuj ponownie" />
        </>
    );
};
