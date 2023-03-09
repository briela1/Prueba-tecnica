import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import { saveState } from "./localStorage";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunkMiddleware from 'redux-thunk';

const persistConfig = {
  key: "root",
  storage
};

const newRootReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    newRootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunkMiddleware)),
);

export const persistor = persistStore(store);

store.subscribe(() => {
    saveState(store.getState());
});