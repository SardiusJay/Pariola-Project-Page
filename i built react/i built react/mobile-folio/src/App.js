import React from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"

import {PariolaResu,PariolaSms,Pariola} from './pages'

import './css/style.css';
import './css/myworks.css';
import './css/mail.css';
import './resuCss/resume.css';
import './resuCss/responsive.css';

function App() {
  return (
    <>
      
      <Router>
        <Switch>
          <Route path="/" exact component={Pariola} />
          <Route path="/mail" component={PariolaSms} />
          <Route path="/resume" component={PariolaResu} />
        </Switch>
      </Router>

    </>
  );
}

export default App;


// => PARIOLA CODES THE WEB✌😎
