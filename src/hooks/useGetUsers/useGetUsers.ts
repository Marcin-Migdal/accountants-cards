import axios, { CancelTokenSource } from "axios";
import { useEffect, useState } from "react";

import { AccountantsData, GetAccountantsParams, Result, STATUS } from "./interfaces";

const url = "https://randomuser.me/api";
const initAccountantsData = {
    status: STATUS.NOT_LOADED,
    results: [],
    info: { page: 1, results: 4, seed: "accountants-cards" },
};
export const useGetAccountants = () => {
    const [accountantsData, setAccountantsData] = useState<AccountantsData>(initAccountantsData);

    useEffect(() => {
        const cancelToken = axios.CancelToken.source();

        getUsers(accountantsData.info, cancelToken);

        return () => {
            cancelToken.cancel("Request canceled");
        };
    }, [accountantsData.info.page]);

    const getUsers = async (payload: GetAccountantsParams, cancelToken: CancelTokenSource) => {
        try {
            setAccountantsData((prevState) => ({ ...prevState, status: STATUS.LOADING }));

            const response = await axios.get(url, { params: payload, cancelToken: cancelToken.token });

            setAccountantsData((prevState) => {
                const results: Result[] = prevState?.results ? [...prevState?.results, ...response.data.results] : response.data.results;

                return { results: results, info: response.data.info, status: STATUS.LOADED };
            });
        } catch (error) {
            if (axios.isCancel(error)) {
                console.error("Axios error: ", error.message);
                return;
            }

            setAccountantsData((prevState) => ({ ...prevState, status: STATUS.ERROR }));
        }
    };

    // fetching next batch of accountants
    const getMoreAccountants = () =>
        setAccountantsData((prevState) => ({ ...prevState, info: { ...prevState.info, page: prevState.info.page + 1 } }));

    return { accountantsData, setAccountantsData, getMoreAccountants };
};
