import React from 'react';
import { useEffect, CSSProperties, JSX } from 'react';
import { useState } from 'react';
import paginateStyles from './paginate.module.css';
import Variant1 from './variants/Variant1';
import Variant2 from './variants/Variant2';

type StylesType = {
  container?: CSSProperties;
  buttonContainer?: CSSProperties;
  button?: CSSProperties;
  activeButton?: CSSProperties;
};

type classNamesType = {
  container?: string;
  buttonContainer?: string;
  button?: string;
};

type propsType = {
  items?: any[];
  itemsPerPage?: number;
  renderItem?: (item: any, index: number, itemsOnCurPage: any[]) => JSX.Element;
  onNoItem?: () => JSX.Element;
  classNames?: classNamesType;
  styles?: StylesType;
  variant?: number;
  onPageChange?: (
    current: number,
    total: number,
    itemsOnCurPage: any[]
  ) => void;
  activePage?: number;
};

export function Paginate({
  items = [],
  itemsPerPage = 10,
  renderItem = () => <></>,
  onNoItem = undefined,
  classNames = {},
  styles = {},
  variant = 1,
  onPageChange = () => {},
  activePage = 1,
}: propsType) {
  const [totalPages, setTotalPages] = useState(
    Math.ceil(items.length / itemsPerPage)
  );
  const getPageInRange = (page: number): number =>
    page > totalPages ? totalPages : page < 1 ? 1 : page;

  const [curPage, setCurPage] = useState(activePage || 1);
  const [itemsOnCurPage, setItemsOnCurPage] = useState(
    items.slice(0, itemsPerPage)
  );

  const handleGoToPage = (page: number | 'prev' | 'next') => {
    if (typeof page === 'number') {
      onPageChange(page, totalPages, itemsOnCurPage);
      setCurPage(page);
    } else {
      if (page === 'prev') {
        if (curPage > 1) {
          onPageChange(curPage - 1, totalPages, itemsOnCurPage);
          setCurPage((prev) => prev - 1);
        }
      } else if (page === 'next') {
        if (curPage < totalPages) {
          onPageChange(curPage + 1, totalPages, itemsOnCurPage);
          setCurPage((prev) => prev + 1);
        }
      }
    }
  };

  useEffect(() => {
    const itemsStart = (curPage - 1) * itemsPerPage;
    setItemsOnCurPage(items.slice(itemsStart, itemsStart + itemsPerPage));
  }, [curPage]);

  useEffect(() => {
    setCurPage(1);
    setTotalPages(Math.ceil(items.length / itemsPerPage));
    setItemsOnCurPage(items.slice(0, itemsPerPage));
  }, [itemsPerPage, items]);

  useEffect(() => {
    if (activePage) setCurPage(getPageInRange(activePage));
  }, [activePage]);

  return (
    <>
      <div className={classNames.container} style={{ ...styles?.container }}>
        {itemsOnCurPage.length ? (
          itemsOnCurPage?.map((item, index) =>
            renderItem(item, index, itemsOnCurPage)
          )
        ) : onNoItem ? (
          onNoItem()
        ) : (
          <p className={paginateStyles.noCards}>No Items</p>
        )}
      </div>
      <div
        className={
          paginateStyles.buttonContainer + ' ' + classNames.buttonContainer
        }
        style={{
          justifyContent: variant <= 1 ? 'flex-end' : 'center',
          ...styles.buttonContainer,
        }}
      >
        {variant <= 1 ? (
          <Variant1
            styles={styles}
            classNames={classNames}
            handleGoToPage={handleGoToPage}
            activePage={curPage}
            totalPages={totalPages}
          />
        ) : (
          <Variant2
            styles={styles}
            classNames={classNames}
            handleGoToPage={handleGoToPage}
            activePage={curPage}
            totalPages={totalPages}
          />
        )}
      </div>
    </>
  );
}
