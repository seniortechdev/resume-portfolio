import { configureStore } from '@reduxjs/toolkit';
import skillsReducer from './skills/Skills';
import { createLogger } from "redux-logger";
import experiencesReducer from './experience/Experience';

const logger = createLogger();

const store = configureStore({
  reducer: {
    skills: skillsReducer,
    experiences: experiencesReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export type RootState = ReturnType<typeof store.getState>;
export default store;