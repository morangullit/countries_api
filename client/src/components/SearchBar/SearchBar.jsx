import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCountry } from '../../redux/actions/actions';
import styles from './SearchBar.module.css';

const SearchBar = ({ show }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = ({target}) => {
    const input = target.value;
    const validInput = /^[a-zA-Z\s]*$/.test(input);
    setSearchTerm(input);
    if (!input || !validInput) {
      return;
    }
    dispatch(searchCountry(input));
  };

  if (!show) {
    return null;
  }

  return (
    <div className={styles.input_icon}>
      <input type="text" placeholder="Search country" value={searchTerm} onChange={handleSearch} />
    </div>
  );
};

export default SearchBar;

