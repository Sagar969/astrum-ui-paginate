import { FormEvent, useEffect, useState } from 'react';
import paginateStyles from '../paginate.module.css';
import React from 'react';

type PropsType = {
  styles: any;
  classNames: any;
  handleGoToPage: (page: number | 'prev' | 'next') => void;
  activePage: number;
  totalPages: number;
};

export default function Variant1({
  styles = {},
  classNames = {},
  handleGoToPage = () => {},
  activePage = 1,
  totalPages = 1,
}: PropsType) {
  const [inputData, setInputData] = useState({
    lastValue: activePage,
    newValue: activePage,
  });

  const handleChangeInput = (name: string, value: number) =>
    setInputData((prev) => ({ ...prev, [name]: value }));

  const handleGoTo = (e: FormEvent) => {
    e.preventDefault();
    const num = inputData.newValue;
    if (num >= 1 && num <= totalPages) {
      handleGoToPage(num);
      handleChangeInput('lastValue', num);
    } else handleChangeInput('newValue', inputData.lastValue);
  };

  useEffect(() => {
    setInputData({ lastValue: activePage, newValue: activePage });
  }, [activePage]);

  return (
    <>
      <button
        type="button"
        disabled={activePage <= 1}
        onClick={() => handleGoToPage('prev')}
        className={paginateStyles.button + ' ' + classNames.button}
        style={{ ...styles?.button }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"
            fill="#444"
          />
        </svg>
      </button>
      page
      <form
        onSubmit={handleGoTo}
        className={paginateStyles.variant1InputContainer}
      >
        <input
          type="number"
          name="newValue"
          min=""
          max={totalPages}
          onBlur={() => handleChangeInput('newValue', inputData.lastValue)}
          title="Enter value and press Enter"
          value={inputData.newValue || ''}
          onChange={(e) => handleChangeInput('newValue', +e.target.value)}
        />
      </form>{' '}
      of {totalPages}
      <button
        type="button"
        disabled={activePage >= totalPages}
        onClick={() => handleGoToPage('next')}
        className={paginateStyles.button + ' ' + classNames.button}
        style={{ ...styles?.button }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z"
            fill="#444"
          />
        </svg>
      </button>
    </>
  );
}
