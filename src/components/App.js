/*eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieGrid from './MovieGrid/MovieGrid';
import SearchBar from './SearchBar/SearchBar';

const findFilm = (array, value) => {
  return array.filter(el =>
    el.title.toLowerCase().includes(value.toLowerCase()),
  );
};

class App extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        posterUrl: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  state = {
    items: this.props.items,
    searchValue: '',
  };

  getSearch = value => {
    this.setState(state => ({
      searchValue: value,
    }));
  };

  render() {
    const { items, searchValue } = this.state;
    const filterFilm = findFilm(items, searchValue);
    return (
      <div>
        <SearchBar getSearch={this.getSearch} />
        <MovieGrid items={filterFilm} />
        {filterFilm.length === 0 && (
          <div>
            <p>No matching results!</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
