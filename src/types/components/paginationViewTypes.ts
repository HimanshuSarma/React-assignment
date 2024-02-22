import React from 'react';

interface PaginationBtnProps {
  label: string;
  onClickCb: (e: React.MouseEvent<HTMLButtonElement>) => void,
  style?: Object,
  disabled?: boolean
};

interface PaginationNavigationButtonsProps {
  pageNo: number,
  setPageNo: React.Dispatch<React.SetStateAction<number>>,
  totalPages: number,
  totalClubbedPages: number
};

interface PaginationProps {
  // url: string,
  cacheSize: number,
  limit: number,
  totalClubbedPages: number,
  totalCols: string,
  colWidth: string,
  View: React.FC<any>,
  // paginationQuery: Function,
  extractData: (res: Array<any>) => Array<any>,
  totalPages: number,
  paginationListItemKey: string,
  paginationListItemFilterHandler: (searchQuery: string, paginatedListItem: any) => void,
  getData: (pageNo: number, limit: number) => Array<any>,
  searchQuery?: string,
  updateSearchQuery?: Function,
  showSearchBar: boolean,
};



export type { PaginationBtnProps, PaginationNavigationButtonsProps, PaginationProps };