import React from 'react';
import ReactDOM from 'react-dom';

import Food from './foodTable.js'

ReactDOM.render(
  <Food />,
  document.getElementById('main') // make sure this is the same as the id of the div in your index.html
);

