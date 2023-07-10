import React from 'react';
import './App.scss';
import useEagerConnect from './hooks/useEagerConnect';
// import Routes from './utils/Routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Swap from './pages/Swap';

function App() {

  useEagerConnect();

  return (
    <>
      {/* <Routes /> */}
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/swap" component={Swap} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sigin" component={Signup} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
