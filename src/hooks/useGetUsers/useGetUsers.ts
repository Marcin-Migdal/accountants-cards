import { useEffect, useState } from "react";
import axios from "axios";

import { AccountantsData, Result, STATUS } from "./interfaces";

interface GetAccountantsParams {
    page: number;
    results: number;
    seed: string;
}

const url = "https://randomuser.me/api";
const initInfo: GetAccountantsParams = { page: 1, results: 1, seed: "accountants-cards" };
export const useGetAccountants = () => {
    const [accountantsData, setAccountantsData] = useState<AccountantsData>({
        status: STATUS.NOT_LOADED,
        results: [],
        info: initInfo,
    });

    useEffect(() => {
        // fetching initial accountants
        getUsers(accountantsData.info);
    }, []);

    const getUsers = async (payload: GetAccountantsParams) => {
        try {
            setAccountantsData((prevState) => ({ ...prevState, status: STATUS.LOADING }));

            const response = await axios.get(url, { params: payload });

            setAccountantsData((prevState) => {
                const results: Result[] = prevState?.results ? [...prevState?.results, ...response.data.results] : response.data.results;

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
