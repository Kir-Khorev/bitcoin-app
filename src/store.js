const initialState = {
    ath: {},
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_ATH_DATA":
            return {
                ...state,
                ath: action.data
            }
        default:
            return state;
    }
}

export default reducer;