import React from "react";

import { Result } from "../../hooks/useGetUsers/interfaces";

interface AccountantsCardsProps {
    accountants: Result[];
}

export const AccountantsCards = ({ accountants }: AccountantsCardsProps) => {
    return (
        <div className="accountants-cards">
            {accountants.map((accountant) => (
                <div>{accountant.name.first + " " + accountant.name.last}</div>
            ))}
        </div>
    );
};
