/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ReturnPaginationRange } from './ReturnPaginationRange';

function Pagination(props: any) {
  const paginationRange = ReturnPaginationRange(
    props.totalPage,
    props.page,
    props.limit,
    props.siblings
  );
  return (
    <nav
      className="unselectable default-font-color"
      aria-label="Page navigation"
    >
      <ul className="pagination pagination-md justify-content-center ">
        <li className="page-item">
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <span
            onClick={() => props.onPageChange('&laquo;')}
            className="page-link rounded-pill"
          >
            &laquo;
          </span>
        </li>
        <li className="page-item">
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <span
            onClick={() => props.onPageChange('&lsaquo;')}
            className="page-link rounded-pill"
          >
            &lsaquo;
          </span>
        </li>
        {paginationRange.map((value) => {
          if (value === props.page) {
            return (
              <li key={value} className="page-item active">
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
                <span
                  onClick={() => props.onPageChange(value)}
                  className="page-link rounded-pill"
                >
                  {value}
                </span>
              </li>
            );
          }
          return (
            <li key={value} className="page-item">
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
              <span
                onClick={() => props.onPageChange(value)}
                className="page-link rounded-pill"
              >
                {value}
              </span>
            </li>
          );
        })}
        <li className="page-item">
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <span
            onClick={() => props.onPageChange('&rsaquo;')}
            className="page-link rounded-pill"
          >
            &rsaquo;
          </span>
        </li>
        <li className="page-item">
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <span
            onClick={() => props.onPageChange('&raquo;')}
            className="page-link rounded-pill"
          >
            &raquo;
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
