import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ToDoContainer from './components/ToDoContainer';
import reportWebVitals from './reportWebVitals';
import About from './pages/About';
import NotMatch from './pages/NotMatch';
import Navbar from './components/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={ToDoContainer} />
        <Route path="/about" component={About} />
        <Route path="*" component={NotMatch} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
