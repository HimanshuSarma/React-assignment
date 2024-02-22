interface ViewComponentProps {
  paginatedList: Array<any>;
  searchQuery: string;
  sortData?: (sortOrder: 'asc' | 'desc', sortCriteria: string) => void;
};

export type { ViewComponentProps };