import { configureStore } from '@reduxjs/toolkit';
import companyProfileReducer from '../features/company/companyProfileSlice';

export default configureStore({
  reducer: {
    companyProfile: companyProfileReducer,
  },
});
