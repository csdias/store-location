import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';

it('should renders Header without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);

})