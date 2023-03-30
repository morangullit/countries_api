import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { About  } from './components/';
import Detail from './components/Detail/Detail';
import CreateActivity from './components/Form/CreateActivity';
import HomePage from './components/HomePage/HomePage';
import LandingPage from './components/LandingPage/LandingPage';
import { NavBar } from './components/NavBar/NavBar';


function App() {

  const location = useLocation();
  

  return (
      <div>
        {location.pathname !== '/' && <NavBar />}
        <Route exact path="/" component={LandingPage} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/create" component={CreateActivity} />
        <Route path="/about" component={About} />
        <Route path="/home" render={() => <HomePage/>}/>
      </div>
     
  );
}

export default App;