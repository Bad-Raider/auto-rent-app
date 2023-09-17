import { configureStore } from "@reduxjs/toolkit";
import { carReducer } from "./carSlice.js";
import { favoritesReducer } from "./favoritesSlise.js";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const PersistConfig = {
  key: "favorites",
  storage,
};


export const store = configureStore({
  reducer: {
    car: carReducer,
    favorites: persistReducer(PersistConfig, favoritesReducer),
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);




