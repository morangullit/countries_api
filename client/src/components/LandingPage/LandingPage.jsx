import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';
import GitHub from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png';

const LandingPage = () => {
    return (
        <div>
            <div className={styles.landing}>
                <h1 className={styles.landing_h1}>Welcome a Countries App</h1>
                <Link to="/home">
                    <button className={styles.button}>Enter</button>
                </Link>
            </div>
                <footer className={styles.footer}>
                    <div className={`${styles.column} ${styles.left}`}>
                        <p className={styles.copyright}>&copy; Copyright 2023</p>
                    </div>
                    <div className={`${styles.column} ${styles.center}`}>
                        <p >Developer Gullit Moran</p>
                    </div>
                    <div className={`${styles.column} ${styles.right}`}>
                        <img className={styles.logos_img} src={GitHub} alt="Logo de GitHub" />
                        <img className={styles.logos_img} src={Linkedin} alt="Logo de Linkedin" />
                    </div>
                </footer>
        </div>


    );
};

export default LandingPage;
