import { configureStore } from '@reduxjs/toolkit';
import rootTasksSlice from './features/rootTasksSlice';

const store = configureStore({
  reducer: {
    rootTasks: rootTasksSlice,
  },
});
export default store;
