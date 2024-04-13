import { useEffect, useState } from 'react';
import paginateStyles from '../paginate.module.css';
import React from 'react';

type PropsType = {
  styles: any;
  classNames: any;
  handleGoToPage: (page: number | 'prev' | 'next') => void;
  activePage: number;
  totalPages: number;
};

const activeBtnBG = 'rgb(137, 191, 241)';

export default function Variant2({
  styles = {},
  classNames = {},
  handleGoToPage = () => {},
  activePage = 1,
  totalPages = 1,
}: PropsType) {
  const [conditions, setConditions] = useState<number[]>([]);

  useEffect(() => {
    setConditions([
      totalPages < 5 ? 2 : activePage <= 2 ? 2 : activePage - 1,
      activePage >= totalPages - 2
        ? totalPages - 2
        : activePage <= 3
        ? 3
        : activePage,
      totalPages < 5
        ? 3
        : activePage >= totalPages - 1
        ? totalPages - 1
        : activePage < 4
        ? 4
        : activePage + 1,
    ]);
  }, [activePage, totalPages]);
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
      <button
        type="button"
        onClick={() => handleGoToPage(1)}
        className={paginateStyles.button + ' ' + classNames.button}
        style={{
          background: activePage === 1 ? activeBtnBG : '',
          ...(activePage === 1 ? styles.activeButton : {}),
          ...styles?.button,
        }}
      >
        1
      </button>
      {activePage > 3 ? '...' : ''}
      {totalPages > 2 &&
        ((totalPages < 5 && activePage !== totalPages) ||
          activePage < totalPages - 1) && (
          <button
            type="button"
            data-button="1"
            onClick={() => handleGoToPage(conditions[0])}
            className={paginateStyles.button + ' ' + classNames.button}
            style={{
              background: activePage === 2 ? activeBtnBG : '',
              ...(activePage === 2 ? styles.activeButton : {}),
              ...styles?.button,
            }}
          >
            {conditions[0]}
          </button>
        )}
      {totalPages > 4 && activePage > 1 && activePage < totalPages && (
        <button
          type="button"
          onClick={() => handleGoToPage(conditions[1])}
          className={paginateStyles.button + ' ' + classNames.button}
          style={{
            background: activePage === conditions[1] ? activeBtnBG : '',
            ...(activePage === conditions[1] ? styles.activeButton : {}),
            ...styles?.button,
          }}
        >
          {conditions[1]}
        </button>
      )}
      {totalPages > 3 &&
        ((totalPages < 5 && activePage !== 1) || activePage > 2) && (
          <button
            type="button"
            onClick={() => handleGoToPage(conditions[2])}
            className={paginateStyles.button + ' ' + classNames.button}
            style={{
              background: activePage === totalPages - 1 ? activeBtnBG : '',
              ...(activePage === totalPages - 1 ? styles.activeButton : {}),
              ...styles?.button,
            }}
          >
            {conditions[2]}
          </button>
        )}
      {activePage < totalPages - 2 ? '...' : ''}
      {totalPages > 1 && (
        <button
          type="button"
          onClick={() => handleGoToPage(totalPages)}
          className={paginateStyles.button + ' ' + classNames.button}
          style={{
            background: activePage === totalPages ? activeBtnBG : '',
            ...(activePage === totalPages ? styles.activeButton : {}),
            ...styles?.button,
          }}
        >
          {totalPages}
        </button>
      )}
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
