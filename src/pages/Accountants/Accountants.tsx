import React from "react";

import { AccountantsCards, Button } from "../../components";
import { STATUS } from "../../hooks/useGetUsers/interfaces";
import { useGetAccountants } from "../../hooks";

import "./Accountants.css";

export const AccountantsPage = () => {
    const { accountantsData, getMoreAccountants } = useGetAccountants();

    return (
        <div className="accountants-page">
            <AccountantsCards accountants={accountantsData?.results} />
            <Button busy={accountantsData.status == STATUS.LOADING} onClick={getMoreAccountants} text="Load more" />
        </div>
    );
};
