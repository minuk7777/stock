import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import companyProfileReducer from '../features/company/companyProfileSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    companyProfile: companyProfileReducer,
  },
});
