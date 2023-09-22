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
            <div className="thumbnail">
                <img src={accountant.picture.thumbnail} />
                <div className="name-section">
                    <label>{accountant.gender == "female" ? "Twoja" : "Twój"} księgowy</label>
                    <p>{accountant.name.first + " " + accountant.name.last}</p>
                </div>
            </div>
            <label>E-mail</label>
            <p style={{ textDecoration: "underline" }}>{accountant.email}</p>
            <label>Telefon</label>
            <p>{accountant.phone}</p>
            <label>Średnia cena netto usługi / m-c</label>
            <p>350,00 PLN1</p>
            <Button text="Dowiedź się więcej" onClick={handleShowDetails} />
        </div>
    );
};