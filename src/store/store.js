import { applyMiddleware, legacy_createStore as createStore } from "redux";
import userReducer  from "../reducer/userReducer";
import thunk from 'redux-thunk'
const Store = createStore(userReducer, applyMiddleware(thunk));


// createStore(userReducer)
export default Store;
