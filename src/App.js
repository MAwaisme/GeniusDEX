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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Staking from './pages/Staking';

function App() {

  useEagerConnect();

  return (
    <>
      {/* <Routes /> */}
      <ToastContainer style={{ fontSize: 20 }} />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/swap" component={Swap} />
          <Route exact path="/stake" component={Staking} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sigin" component={Signup} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
