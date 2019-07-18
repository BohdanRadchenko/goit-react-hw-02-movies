import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import styles from './MovieGrid.module.css';

const MovieGrid = ({ items }) => {
  return (
    <ul className={styles.MovieGrid}>
      {items.map(el => (
        <li key={el.id}>
          <MovieCard {...el} />
        </li>
      ))}
    </ul>
  );
};

MovieGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      posterUrl: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MovieGrid;
