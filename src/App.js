import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CountryPage from "./components/Pages/CountryPage";
import Main from "./components/Main/Main";
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/country' component={CountryPage} />
          <Route path='/' component={Main} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
