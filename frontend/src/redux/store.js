import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as appReducer } from "./app/reducer";
import { reducer as accessoreisReducer } from "./app/accessories/reducer";
import { reducer as authReducer } from "./auth/reducer";

const rootreducer = combineReducers({
    appReducer, accessoreisReducer, authReducer
});

const store = legacy_createStore(rootreducer, applyMiddleware(thunk));

export { store };