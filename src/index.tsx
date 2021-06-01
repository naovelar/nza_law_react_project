import React from 'react';
import ReactDOM from 'react-dom';
import { WhoWeAre, WhereWeWork, WhatWeDo, ContactUs } from './components';
import reportWebVitals from './reportWebVitals';

import './styles.css'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/'>
          <WhoWeAre title={'NZA Lawfirm'}/>
        </Route>
        <Route exact path='/Contact' component={ContactUs}/>
        <Route exact path='/WhatWeDo' component={WhatWeDo}/>
        <Route exact path='/WhereWeWork' component={WhereWeWork}/>
        <Route exact path='/WhoWeAre' component={WhoWeAre}/>
      </Switch>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();