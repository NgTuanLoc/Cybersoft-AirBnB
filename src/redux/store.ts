import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";


const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
});


export const store = configureStore({
    reducer: rootReducer,
    middleware: [
        ...getDefaultMiddleware({ serializableCheck: false }),
        sagaMiddleware,
    ],
});

sagaMiddleware.run(saga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
