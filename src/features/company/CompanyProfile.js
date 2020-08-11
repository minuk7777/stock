import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  loadCompanyProfile,
  selectCompanyProfile,
} from './companyProfileSlice';
import styles from './CompanyProfile.module.css';
import { humanNumber } from '../../util';
import Spinner from '../../common/Spinner';

export function CompanyProfile({ ticker }) {
  const { info, isLoading } = useSelector(selectCompanyProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCompanyProfile(ticker));
  }, [dispatch, ticker]);

  const marketCap = humanNumber(info.marketCapitalization);

  return (
    <div className={styles.wrapper}>
      {isLoading && <Spinner />}
      {!isLoading && info.name && (
        <>
          {info.logo && (
            <img src={info.logo} width="50" height="50" alt="회사로고" />
          )}
          <div>{info.ticker}</div>
          <div>이름: {info.name}</div>
          <div>시가총액: {marketCap}</div>
          <div>산업군: {info.finnhubIndustry}</div>
          <div>상장일: {info.ipo}</div>
        </>
      )}
      {!isLoading && Object.keys(info).length === 0 && (
        <div>회사를 찾을 수 없습니다.</div>
      )}
    </div>
  );
}

CompanyProfile.propTypes = {
  ticker: PropTypes.string.isRequired,
};
