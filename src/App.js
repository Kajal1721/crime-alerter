import React from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from "./component/pages/Home";
import Feeds from './component/pages/Feeds';
import RegComplain from './component/pages/RegComplain';
import Chatbot from './component/pages/Chatbot';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/feeds' exact component={Feeds} />
          <Route path='/reg-complain' exact component={RegComplain} />
          <Route path='/chatbot' exact component={Chatbot} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
