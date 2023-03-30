import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { orderCountries, filterByContinent } from '../../redux/actions/actions';
import SearchBar from '../SearchBar/SearchBar';
import styles from './NavBar.module.css';

export const NavBar = () => {

  const dispatch = useDispatch();

  const handleSort = (event) => {
    dispatch(orderCountries(event.target.value));
  }

  const handleContinentFilter = (event) => {
    dispatch(filterByContinent(event.target.value));
  };

  return (
    <nav>
      <div className={styles.nav_container}>
        <a href='/home'>Home</a>
        <SearchBar />
        <div className={styles.order_container}>
          <label>Order by name:</label>
          <select onChange={handleSort}>
            <option value='Abc'>A-Z</option>
            <option value='cba'>Z-A</option>
          </select>
        </div>
        <div className={styles.order_container}>
          <label>Filter by continent:</label>
          <select onChange={handleContinentFilter}>
            <option value=''>All</option>
            <option value='Africa'>Africa</option>
            <option value='Americas'>Americas</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
          </select>
        </div>
        <Link to='/create'>Form</Link>
      </div>
    </nav>
  );
};