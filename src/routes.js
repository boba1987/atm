import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import atmPage from './containers/atmPage'; // eslint-disable-line import/no-named-as-default
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={atmPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
