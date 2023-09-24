import React, { useEffect, useRef } from "react";

import { AccountantsCards, AppLogo, Button, SkeletonAccountantCards, SpinnerComponent } from "../../components";
import { STATUS } from "../../hooks/useGetUsers/interfaces";
import { useGetAccountants } from "../../hooks";

import "./Accountants.css";

export const Accountants = () => {
    const accountantsPageRef = useRef<HTMLDivElement>(null);

    const { accountantsData, getMoreAccountants } = useGetAccountants();

    useEffect(() => {
        if (accountantsPageRef.current && accountantsData.status === STATUS.LOADING) {
            accountantsPageRef.current.scrollTop = accountantsPageRef.current.scrollHeight;
        }
    }, [accountantsData.status]);

    return (
        <div className="accountants-page" ref={accountantsPageRef}>
            <div className="accountants-page-content">
                <AppLogo />
                <AccountantsCards accountants={accountantsData?.results} />
                <SkeletonAccountantCards display={accountantsData.status === STATUS.LOADING} />
                <Button
                    display={accountantsData.status !== STATUS.NOT_LOADED}
                    busy={accountantsData.status === STATUS.LOADING}
                    onClick={getMoreAccountants}
                    text="Pokaż więcej"
                />
                <SpinnerComponent display={accountantsData.status === STATUS.NOT_LOADED} />
            </div>
        </div>
    );
};
