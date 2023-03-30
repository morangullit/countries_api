import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCountry } from '../../redux/actions/actions';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [notFound, setNotFound] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const input = event.target.value;
    const validInput = /^[a-zA-Z\s]*$/.test(input);
    if (!validInput) {
      alert('Por favor, ingrese solo letras.');
      return;
    }
    setSearchTerm(input);
    setNotFound(false);
    dispatch(searchCountry(input, setNotFound));
  };

  return (
    <div>
      <input type="text" placeholder="Buscar país" value={searchTerm} onChange={handleSearch} />
      {notFound && <p>Pais no encontrado</p>}
    </div>
  );
};

export default SearchBar;
