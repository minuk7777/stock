import { createSlice } from '@reduxjs/toolkit';
import { getCompanyProfile } from '../../api/finnhub';

export const companyProfileSlice = createSlice({
  name: 'companyProfile',
  initialState: {
    isLoading: true,
    info: {},
  },
  reducers: {
    setCompanyProfile: (state, action) => {
      state.info = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setCompanyProfile, setLoading } = companyProfileSlice.actions;

export const loadCompanyProfile = (ticker) => (dispatch) => {
  dispatch(setLoading(true));

  getCompanyProfile(ticker, (error, data, response) => {
    dispatch(setCompanyProfile(response.body));
    dispatch(setLoading(false));
  });
};

export const selectCompanyProfile = (state) => state.companyProfile;

export default companyProfileSlice.reducer;
