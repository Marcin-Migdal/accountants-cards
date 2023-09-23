import React from "react";

import { Result } from "../../hooks/useGetUsers/interfaces";
import { AccountantCard } from "../AccountantCard";

import "./AccountantsCards.css";

interface AccountantsCardsProps {
    accountants: Result[];
}

export const AccountantsCards = ({ accountants }: AccountantsCardsProps) => {
    return (
        <div className="accountants-cards">
            {accountants.map((accountant) => (
                <AccountantCard accountant={accountant} key={accountant.login.uuid} />
            ))}
        </div>
    );
};
