import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


const FinalReducer = combineReducers({

});

const InitialState = {};

let store;

if (process.env.NODE_ENV === "production") {
  store = createStore(FinalReducer, InitialState, applyMiddleware(thunk));
} else {
  store = createStore(
    FinalReducer,
    InitialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}

export default store;