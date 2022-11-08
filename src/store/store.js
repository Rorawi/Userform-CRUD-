import { applyMiddleware, legacy_createStore as createStore,combineReducers } from "redux";
import userReducer  from "../reducer/userReducer";
import AuthReducer from "../reducer/authReducer";
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage}


let reducers = combineReducers({
    userReducer:userReducer,
    AuthReducer:AuthReducer
})
const persistedReducer = persistReducer(persistConfig, reducers);
export let Store = createStore(persistedReducer);
export let persistor = persistStore(Store);


// createStore(userReducer)
export default Store;
 