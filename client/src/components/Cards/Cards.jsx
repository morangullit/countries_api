import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import styles from './Cards.module.css';

const Cards = () => {

  const filteredCountries = useSelector(state => state.filteredCountries);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const perPage = 10;

  useEffect(() => {
    setTotalItems(Object.values(filteredCountries).length);
    setCurrentPage(1);
  }, [filteredCountries]);

  useEffect(() => {
    if (filteredCountries.length === 0) {
      setCurrentPage(1);
    }
  }, [filteredCountries]);

  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentItems = Object.values(filteredCountries).slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.card_container}>
      <Pagination perPage={perPage} totalItems={totalItems} paginate={paginate} />
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
