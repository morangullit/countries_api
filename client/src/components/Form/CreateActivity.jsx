import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createActivity, getCountries } from '../../redux/actions/actions';
import { NavBar } from '../NavBar/NavBar';
import styles from './CreateActivity.module.css';

const CreateActivity = ({showNavBar}) => {
  const dispatch = useDispatch();



  const [activityData, setActivityData] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countries: []
  });

  const [selectedCountry, setSelectedCountry] = useState("");

  const countries = useSelector(state => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setActivityData({ ...activityData, [name]: value });
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleAddCountry = () => {
    if (selectedCountry !== "" && !activityData.countries.includes(selectedCountry)) {
      setActivityData({
        ...activityData,
        countries: [...activityData.countries, selectedCountry],
      });
      setSelectedCountry("");
    }
  };

  const handleRemoveCountry = (country) => {
    setActivityData({
      ...activityData,
      countries: activityData.countries.filter((c) => c !== country),
    });
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
    <div >
      <div>
      <h1 className={styles.h1_titel}>Activity Creation</h1>
      <Link className={styles.button_home} to='/home'>Home</Link>
      </div>
      {showNavBar && <NavBar/>}
      <form className={styles.container} onSubmit={handleSubmit}>
        <div>
          <label className={styles.label} htmlFor="name">Nombre de la:</label>
          <input className={styles.input} type="text" id="name" name="name" value={activityData.name} onChange={handleInputChange} required />
        </div>
        <div>
          <label className={styles.label} htmlFor="difficulty">Dificultad:</label>
          <input  
            type="number" 
            name="difficulty" 
            value={activityData.difficulty} 
            onChange={handleInputChange}
            min="1"
            max="5"
            required 
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="duration">Duración:</label>
          <input
              type="number"
              name="duration"
              value={activityData.duration}
              onChange={handleInputChange}
              min="1"
              max="24"
              required
            />
        </div>
        <div>
          <label className={styles.label} htmlFor="season">Temporada:</label>
          <select className={styles.select} id="season" name="season" value={activityData.season} onChange={handleInputChange} required>
            <option value=""></option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
          </select>
        </div>
        <div>
          <label className={styles.label} htmlFor="countries">
            Países:
          </label>
          <select
            className={styles.select}
            id="countries"
            name="countries"
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            <option value="">Seleccionar país</option>
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.id} - {country.name}
              </option>
            ))}
          </select>
          <button className={styles.button} type="button" onClick={handleAddCountry}>
            Añadir
          </button>
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="selectedCountries">
            Países seleccionados:
          </label>
          <ul className={styles.ul} id="selectedCountries">
            {activityData.countries.map((country) => (
              <li className={styles.li} key={country}>
                {country}
                <button
                  className={styles.removeButton}
                  onClick={() => handleRemoveCountry(country)}
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button className={styles.button} type="submit">Crear actividad</button>
      </form>
    </div>
  );
}


export default CreateActivity;
