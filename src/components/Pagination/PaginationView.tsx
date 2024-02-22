import React, { useState, useEffect } from "react";

import LRUCache, { LRUCacheType } from '../../utils/LRUCache';
import { range } from '../../utils/arrayBuilders';
import { PaginationBtnProps, PaginationNavigationButtonsProps, PaginationProps } from '../../types/components/paginationViewTypes'

import './PaginationView.css';

const PaginationBtn: React.FC<PaginationBtnProps> = ({ label, onClickCb, style, disabled }): JSX.Element => {
  return (
    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => onClickCb(e)} style={style} disabled={disabled || false}
      className={`pagination-btn ${disabled ? `pagination-btn-disabled` : `pagination-btn-enabled`}`}
    >
      {label}
    </button>
  );
};

const PaginationNavigationButtons: React.FC<PaginationNavigationButtonsProps> = ({
  pageNo,
  setPageNo,
  totalPages,
  totalClubbedPages,
}): JSX.Element => {

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1.5rem",
        }}
      >
        <PaginationBtn
          label={"Prev"}
          onClickCb={() => {
            setPageNo((pageNo) => pageNo - 1);
          }}
          disabled={pageNo === 1}
        />
        {totalClubbedPages + 2 >= totalPages ? (
          <>
            {Array.from(Array(totalPages).keys())?.map(
              (currentPage, currentPageIdx) => {
                return (
                  <React.Fragment key={currentPageIdx}>
                    <PaginationBtn
                      label={`${currentPage + 1}`}
                      onClickCb={() => setPageNo(currentPage + 1)}
                      style={
                        pageNo === currentPageIdx + 1
                          ? { backgroundColor: `var(--primary-pink)` }
                          : {}
                      }
                    />
                  </React.Fragment>
                );
              },
            )}
          </>
        ) : (
          <>
            {pageNo <= totalClubbedPages ? (
              <div
                style={{
                  display: "flex",
                }}
              >
                {Array.from(Array(totalClubbedPages + 1).keys()).map(
                  (item, idx) => {
                    return (
                      <React.Fragment key={idx}>
                        <PaginationBtn
                          label={`${item + 1} `}
                          onClickCb={() => {
                            setPageNo(item + 1);
                          }}
                          style={
                            pageNo === item + 1
                              ? { backgroundColor: `var(--primary-pink)` }
                              : {}
                          }
                        />
                      </React.Fragment>
                    );
                  },
                )}

                <p>...</p>

                <PaginationBtn
                  label={`${totalPages} `}
                  onClickCb={() => {
                    setPageNo(totalPages);
                  }}
                  style={
                    pageNo === totalPages ? { backgroundColor: `var(--primary-pink)` } : {}
                  }
                />
              </div>
            ) : pageNo > totalClubbedPages &&
              pageNo < totalPages - totalClubbedPages + 1 ? (
              <>
                <PaginationBtn
                  label={`1`}
                  onClickCb={() => {
                    setPageNo(1);
                  }}
                />

                <p>...</p>

                <PaginationBtn
                  label={`${pageNo - 1} `}
                  onClickCb={() => {
                    setPageNo(pageNo - 1);
                  }}
                />

                <PaginationBtn
                  label={`${pageNo} `}
                  onClickCb={() => {
                    setPageNo(pageNo);
                  }}
                  style={{ backgroundColor: `var(--primary-pink)` }}
                />

                <PaginationBtn
                  label={`${pageNo + 1} `}
                  onClickCb={() => {
                    setPageNo(pageNo + 1);
                  }}
                />

                <p>...</p>

                <PaginationBtn
                  label={`${totalPages} `}
                  onClickCb={() => {
                    setPageNo(totalPages);
                  }}
                />
              </>
            ) : (
              <div
                style={{
                  display: "flex",
                }}
              >
                <PaginationBtn
                  label={`1`}
                  onClickCb={() => {
                    setPageNo(1);
                  }}
                  style={pageNo === 1 ? { backgroundColor: `var(--primary-pink)` } : {}}
                />
                <p>...</p>
                {range(totalPages - totalClubbedPages, totalPages).map(
                  (item, idx) => {
                    return (
                      <React.Fragment key={idx}>
                        <PaginationBtn
                          label={`${item} `}
                          onClickCb={() => {
                            setPageNo(item);
                          }}
                          style={
                            pageNo === item ? { backgroundColor: `var(--primary-pink)` } : {}
                          }
                        />
                      </React.Fragment>
                    );
                  },
                )}
              </div>
            )}
          </>
        )}
        <PaginationBtn
          label={"Next"}
          onClickCb={() => {
            setPageNo((pageNo) => pageNo + 1);
          }}
          disabled={pageNo === totalPages}
        />
      </div>
    </>
  );
};

const Pagination: React.FC<PaginationProps> = ({
  cacheSize,
  limit,
  totalClubbedPages = 4,
  View,
  extractData,
  totalPages,
  getData,
  searchQuery,
  updateSearchQuery,
  showSearchBar
}): JSX.Element => {
  const [paginatedList, setPaginatedList] = useState<LRUCacheType>(
    new LRUCache(cacheSize || 5),
  );
  const [pageNo, setPageNo] = useState<number>(1);

  const onChangeSearchQueryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchQuery?.(e.target.value);
  }

  const sortDataOfGivenPage = (sortOrder: 'asc' | 'desc', sortCriteria: string) => {
    setPaginatedList((paginatedList: LRUCacheType) => {
      const updatedPaginatedList = { ...paginatedList };
      updatedPaginatedList.sort(pageNo, sortOrder, sortCriteria);
      return updatedPaginatedList;
    })
  }

  useEffect(() => {
    (async () => {
      try {
        if (paginatedList.doesKeyExist(pageNo)) {
          return;
        }

        // const res = await axios.get(paginationQuery(pageNo, limit));
        const res: Array<any> = (await getData(pageNo, limit)) as Array<any>;
        console.log('newData', res);

        setPaginatedList((paginatedList) => {
          const updatedPaginatedList = {
            ...paginatedList,
          };

          updatedPaginatedList?.set(pageNo, extractData(res));
          return updatedPaginatedList;
        });
      } catch (err) {
        console.log(err);
      } finally {
        console.log("finally");
      }
    })();
  }, [pageNo]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        {showSearchBar ? <div
          style={{
            marginLeft: 'auto'
          }}
        >
          <input
            type={"text"}
            value={searchQuery}
            onChange={onChangeSearchQueryHandler}
            placeholder={"Search here..."}
            className={`pagination-search-bar`}
          />
        </div> : null}

        <View
          paginatedList={paginatedList.cache.get(pageNo)}
          searchQuery={searchQuery}
          sortData={sortDataOfGivenPage}
        />

        {/* <table
          style={{
            // display: "flex",
            // flexDirection: 'column',
            // justifyContent: "center",
            // gap: "0.5rem",
            width: colWidth
          }}
        >
          <thead>
            <th>Event Name</th>
            <th>Event Start</th>
            <th>Event End</th>
            <th>Client Name</th>
            <th>Contact Info</th>
            <th>Venue</th>
          </thead>
          <tbody></tbody> */}
        {/* {paginatedList?.cache.get(pageNo)
            ?.filter((paginatedListItem: any) => {
              return paginationListItemFilterHandler(searchQuery, paginatedListItem);
            })
            ?.map((paginatedListItem: any, idx: number) => {
              // return (
              //   <React.Fragment key={paginatedListItem?.id}>
              //     <div
              //       style={{
              //         backgroundColor: "rgba(211,211,211,1)",
              //       }}
              //       className={`paginated - list - item - container`}
              //     >
              //       <p>{paginatedListItem?.title}</p>
              //     </div>
              //   </React.Fragment>
              // );
              return (
                <React.Fragment key={paginatedListItem?.[paginationListItemKey]}>
                  <View
                    paginatedListItem={paginatedListItem}
                  />
                </React.Fragment>
              )
            })} */}
        {/* </table> */}


      </div>

      <PaginationNavigationButtons
        pageNo={pageNo}
        setPageNo={setPageNo}
        totalPages={totalPages}
        totalClubbedPages={totalClubbedPages}
      />
    </>
  );
};

export default Pagination;
