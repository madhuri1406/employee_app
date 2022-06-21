import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import reducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const middleware = applyMiddleware(thunk, createLogger());

const middleware_prod = applyMiddleware(thunk);

export const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store);
