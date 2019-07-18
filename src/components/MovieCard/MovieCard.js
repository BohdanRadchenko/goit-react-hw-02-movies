/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieCard.module.css';

const MovieCard = ({ title, posterUrl, overview }) => {
  return (
    <div className={styles.MovieCard}>
      <img src={posterUrl} alt={title} />
      <div className={styles.conent}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.descr}>{overview}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default MovieCard;
