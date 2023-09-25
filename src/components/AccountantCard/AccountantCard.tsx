import React from "react";

import { Result } from "../../hooks/useGetUsers/interfaces";
import { Button } from "../Button";

import "./AccountantCard.css";

interface AccountantCardProps {
    accountant: Result;
}

export const AccountantCard = ({ accountant }: AccountantCardProps) => {
    const handleShowDetails = () => {
        console.log("Show more");
    };

    return (
        <div className="accountant-card">
            <div className="thumbnail-section">
                <img src={accountant.picture.thumbnail} alt="accountant thumbnail" />
                <div className="name-section">
                    <label>{accountant.gender === "female" ? "Twoja" : "Twój"} księgowy</label>
                    <p>{accountant.name.first + " " + accountant.name.last}</p>
                </div>
            </div>
            <label>E-mail</label>
            <a href={`mailto:${accountant.email}`}>{accountant.email}</a>
            <label>Telefon</label>
            <p>{accountant.phone}</p>
            <label>Średnia cena netto usługi / m-c</label>
            <p>{accountant.price}</p>
            <Button text="Dowiedź się więcej" onClick={handleShowDetails} />
        </div>
    );
};
