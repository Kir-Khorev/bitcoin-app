import axios from "axios";
import { api } from "./apikey";

export default function getAllСryptocurrencies() {
    return dispatch => {
        axios.get(api)
            .then(res =>
                dispatch({
                    type: "FETCH_CRYPTO_DATA",
                    data: res.data
                })
            );
    }
}