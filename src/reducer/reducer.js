const initialState = {
  ath: {},
  currencies: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_ATH_DATA":
      return {
        ...state,
        ath: action.data,
      };
    case "FETCH_CRYPTO_DATA":
      return {
        ...state,
        currencies: action.data,
      };
    default:
      return state;
  }
}

export default reducer;
