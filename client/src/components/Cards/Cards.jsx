import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import styles from './Cards.module.css';

const Cards = () => {

  const filteredCountries = useSelector(state => state.filteredCountries);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;
  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentItems = Object.values(filteredCountries)?.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  

  return (
    <div className={styles.card_container}>
      <Pagination perPage={perPage} totalItems={filteredCountries.length} paginate={paginate} />
      {currentItems.map((country) => (
        <Card
          key={country.id}
          id={country.id}
          name={country.name}
          flagImage={country.flagImage}
          continent={country.continent}
        />
      ))}
    </div>
  );
};

export default Cards;
