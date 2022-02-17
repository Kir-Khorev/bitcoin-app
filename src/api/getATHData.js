import axios from "axios";

export default function getATHData() {
    return dispatch => {
        axios.get('https://tstapi.cryptorank.io/v0/coins/bitcoin')
            .then(res =>
                dispatch({
                    type: "FETCH_ATH_DATA",
                    data: res.data
                })
            );
    }
}