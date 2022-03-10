import axios from "axios";

export default function getAllСryptocurrencies() {
    return dispatch => {
        axios.get('https://api.cryptorank.io/v1/currencies/?api_key=e3440fe2cc290ca0ad530b27be5f05cc00db9ecbcbb0d1babeaddede1b21')
            .then(res =>
                dispatch({
                    type: "FETCH_CRYPTO_DATA",
                    data: res.data
                })
            );
    }
}