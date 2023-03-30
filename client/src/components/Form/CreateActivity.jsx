import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createActivity, getCountries } from '../../redux/actions/actions';

const CreateActivity = () => {
  const dispatch = useDispatch();

  const [activityData, setActivityData] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countries: []
  });

  const countries = useSelector(state => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setActivityData({ ...activityData, [name]: value });
  };

  const handleCountryChange = (event) => {
    const options = event.target.options;
    if(!options) return;
    const value = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setActivityData({ ...activityData, countries: value });
  };

  const handleAddCountry = (event) => {
    event.preventDefault();
    const countrySelect = document.getElementById('countries');
    const selectedCountries = Array.from(countrySelect.selectedOptions).map(option => option.value);
    setActivityData({...activityData, countries: [...activityData.countries, ...selectedCountries]});
    countrySelect.selectedIndex = -1;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createActivity(activityData));
    setActivityData({
      name: '',
      difficulty: '',
      duration: '',
      season: '',
      countries: []
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" value={activityData.name} onChange={handleInputChange} required />
      </div>
      <div>
        <label htmlFor="difficulty">Dificultad:</label>
        <select id="difficulty" name="difficulty" value={activityData.difficulty} onChange={handleInputChange} required>
          <option value=""></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <label htmlFor="duration">Duración:</label>
        <input type="number" id="duration" name="duration" value={activityData.duration} onChange={handleInputChange} required step="1" />
      </div>
      <div>
        <label htmlFor="season">Temporada:</label>
        <select id="season" name="season" value={activityData.season} onChange={handleInputChange} required>
          <option value=""></option>
          <option value="Summer">Summer</option>
          <option value="Autumn">Autumn</option>
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
        </select>
      </div>
      <div>
  <label htmlFor="countries">Países:</label>
  <select id="countries" name="countries" value={activityData.countries} onChange={handleCountryChange} required multiple>
    {countries.map(country => (
      <option key={country.id} value={country.id}>
        {country.id} - {country.name}
      </option>
    ))}
  </select>
  <button type="button" onClick={handleAddCountry}>Añadir</button>
  <ul>
    {activityData.countries.map((country) => (
      <li key={country}>{country}</li>
    ))}
  </ul>
</div>
<button type="submit">Crear actividad</button>
</form> 
)}

export default CreateActivity;
