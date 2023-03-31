import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../redux/actions/actions';
import styles from './Detail.module.css';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const country = useSelector(state => state.detail);

   useEffect(() => {
    dispatch(getDetail(id))
  }, [dispatch, id]);

  return (
    
    <div >
      <h1 className={styles.h1_titel}>Country Detail</h1>
      <div className={styles.card}>
      <img className={styles.card_image} src={country.flagImage} alt={`Bandera de ${country.name}`} />
      <div className={styles.card_content}>
        <h2 className={styles.detail_title}>{country.name}</h2>
        <p className={styles.detail_text}>
          <strong>Capital:</strong> {country.capital}
        </p>
        <p className={styles.detail_text}>
          <strong>Continente:</strong> {country.continent}
        </p>
        <p className={styles.detail_text}>
          <strong>Sub-Region:</strong> {country.subregion}
        </p>
        <p className={styles.detail_text}>
          <strong>Area:</strong> {country.area}
        </p> 
        <p className={styles.detail_text}>
          <strong>Población:</strong> {country.population}
        </p>  
      </div>
      </div>
    </div>
  );
};

export default Detail;
