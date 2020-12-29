import React, {useState} from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from "./component/pages/Home";
import Feeds from './component/pages/Feeds';
import RegComplain from './component/pages/RegComplain';
import Chatbot from './component/pages/Chatbot';
import Footer from './component/Footer';

function App() {

  const [user, setUser] = useState(null);

  const changeUser=(newUser) => {
    setUser(newUser);
  }

  return (
    <>
      <Router>
        <Navbar user={user} changeUser={(newUser) => changeUser(newUser)}/>
        <Switch>
          <Route path='/' exact><Home user={user} /></Route>
          {/* <Route path='/' exact component={Home} /> */}
          {/* <Route path='/feeds' exact component={Feeds} /> */}
          {/* <Route path='/reg-complain' exact component={RegComplain} /> */}
          {/* <Route path='/chatbot' exact component={Chatbot} /> */}
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
