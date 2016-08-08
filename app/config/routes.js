import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Main from '../containers/Main'
import HomeContainer from '../containers/HomeContainer'
import ForecastContainer from '../containers/ForecastContainer'
import DetailContainer from '../containers/DetailContainer'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomeContainer} />
      <Route path='forecast/:city' component={ForecastContainer} />
      <Route path='detail/:city' component={DetailContainer} />
    </Route>
  </Router>
);

export default routes;