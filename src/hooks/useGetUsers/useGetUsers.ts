import { useEffect, useState } from "react";
import axios from "axios";

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
        // fetching initial accountants
        getUsers(initAccountantsData.info);
    }, []);

    const getUsers = async (payload: GetAccountantsParams, errorRefresh: boolean = false) => {
        try {
            setAccountantsData((prevState) => ({ ...prevState, status: errorRefresh ? STATUS.LOADING_ON_ERROR : STATUS.LOADING }));

            const response = await axios.get(url, { params: payload });

            setAccountantsData((prevState) => {
                const results: Result[] =
                    prevState?.results && !errorRefresh ? [...prevState?.results, ...response.data.results] : response.data.results;

                return { results: results, info: response.data.info, status: STATUS.LOADED };
            });
        } catch (error) {
            setAccountantsData((prevState) => ({ ...prevState, status: STATUS.ERROR }));
        }
    };

    // fetching next batch of accountants
    const getMoreAccountants = () => getUsers({ ...accountantsData.info, page: accountantsData.info.page + 1 });

    return { accountantsData, setAccountantsData, getMoreAccountants };
};
