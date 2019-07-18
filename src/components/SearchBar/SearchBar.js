/*eslint-disable*/

import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

const SearchBar = ({ getSearch }) => {
  return (
    <form className={styles.searchBar}>
      <input
        className={styles.input}
        type="text"
        onChange={e => getSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
