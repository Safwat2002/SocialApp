import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import expireReducer from 'redux-persist-transform-expire';
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage
import getTimelinePostsReducer from "./timelinePostsSlice";
import userReducer from "./userSlice";

const persistConfig = {
    key: "user", // Key in localStorage
    storage,
    transforms: [
        expireReducer('user', {
            expireSeconds: 10, // Set expiration time (in seconds)
            autoExpire: true, // Automatically reset the state when it expires
        }),
    ],

};

const persistedUserReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
    reducer: {
        user: persistedUserReducer,
        timelinePosts: getTimelinePostsReducer
    }
});

export const persistor = persistStore(store);
export default store