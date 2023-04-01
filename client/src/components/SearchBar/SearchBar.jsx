import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCountry } from '../../redux/actions/actions';
import styles from './SearchBar.module.css';

const SearchBar = ({ show }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [notFound, setNotFound] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const input = event.target.value;
    const validInput = /^[a-zA-Z\s]*$/.test(input);
    setSearchTerm(input);
    if (!validInput) {
      setNotFound(true);
      return alert('Por favor, ingrese solo letras.');
    }
    setNotFound(false);
    dispatch(searchCountry(input, setNotFound));
  };

  if (!show) {
    return null;
  }

  return (
    <div className={styles.input_icon}>
      <input type="text" placeholder="Search country" value={searchTerm} onChange={handleSearch} />
      {notFound && <div className="alert alert-danger" role="alert">Country not found</div>}
    </div>
  );
};

export default SearchBar;

