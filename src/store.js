import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer/reducer";

export const store = createStore(reducer, applyMiddleware(thunk));
