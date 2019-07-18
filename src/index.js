import React from 'react';
import ReactDOM from 'react-dom';
import movies from './assets/movies.json';
import App from './components/App';

ReactDOM.render(<App items={movies} />, document.getElementById('root'));
