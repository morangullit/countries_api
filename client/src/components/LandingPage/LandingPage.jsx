import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';

const LandingPage = () => {
    return (
        <div className={styles.landing}>
            <h1 className={styles.landing_h1}>Welcome a Countries App</h1>
            <Link to="/home">
                <button className={styles.button}>Enter</button>
            </Link>
        </div>

    );
};

export default LandingPage;
