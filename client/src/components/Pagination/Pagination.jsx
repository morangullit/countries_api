import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ perPage, totalItems, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / perPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (pageNumber) => {
    paginate(pageNumber);
  };

  return (
    <div className={styles.pagination}>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => handleClick(number)}
          className={currentPage === number ? styles.active : ''}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
