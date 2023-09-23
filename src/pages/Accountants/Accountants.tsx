import React from "react";

import { AccountantsCards, AppLogo, Button, SpinnerComponent } from "../../components";
import { STATUS } from "../../hooks/useGetUsers/interfaces";
import { useGetAccountants } from "../../hooks";

import "./Accountants.css";

export const AccountantsPage = () => {
    const { accountantsData, getMoreAccountants } = useGetAccountants();

    return (
        <div className="accountants-page">
            <div className="accountants-page-content">
                <AppLogo />
                <AccountantsCards accountants={accountantsData?.results} />
                <Button
                    display={accountantsData.status !== STATUS.NOT_LOADED}
                    busy={accountantsData.status === STATUS.LOADING}
                    onClick={getMoreAccountants}
                    text="Pokaż więcej"
                />
                {accountantsData.status === STATUS.NOT_LOADED && <SpinnerComponent />}
            </div>
        </div>
    );
};
