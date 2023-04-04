import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCountry } from '../../redux/actions/actions';
import styles from './SearchBar.module.css';

const SearchBar = ({ show }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  

  const handleSearch = ({ target }) => {
  const input = target.value;
  // Validaciones
  const validLength = input.length <= 50; // Longitud máxima de 50 caracteres
  const validCharacters = /^[a-zA-Z\s]*$/.test(input); // Solo letras y espacios
  const validSpecialCharacters = !/[@$!%*#?&]/.test(input); // No caracteres especiales
  const validNumbers = !/\d/.test(input); // No números
  const validSpaces = !/^\s/.test(input); // No espacios en blanco al inicio

  if (!validLength) {
    alert('No se permite más de 50 caracteres');
    return;
  }
  if (!validNumbers) {
    alert('No se permiten números');
    return;
  }
  if (!validCharacters) {
    alert('No se permiten caracteres especiales');
    return;
  }
  if (!validSpecialCharacters) {
    alert('No se permiten caracteres especiales');
    return;
  }
  if (!validSpaces) {
    alert('No se permiten espacios en blanco al inicio');
    return;
  }

  setSearchTerm(input);
  if (input.length === 0) {
    // Validar si el valor del input es cero
    // No hacer el dispatch
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

