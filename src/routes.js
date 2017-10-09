import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import AtmPage from './containers/AtmPage'; // eslint-disable-line import/no-named-as-default
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AtmPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
