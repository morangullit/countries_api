import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCountry } from '../../redux/actions/actions';
import styles from './SearchBar.module.css'

const SearchBar = () => {
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

  return (
    <div className={styles.input_icon}>
      <input type="text" placeholder="Buscar país" value={searchTerm} onChange={handleSearch} />
      {notFound && <div className="alert alert-danger" role="alert">Pais no encontrado</div>}
    </div>
  );
};

export default SearchBar;

