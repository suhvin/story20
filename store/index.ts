import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import controlReducer from "./control";
import testReducer from "./data/test";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const rootReducer = combineReducers({
  controlReducer: controlReducer,
  // testReducer: testReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
