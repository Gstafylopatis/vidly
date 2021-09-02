import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import Movies from './components/movies';
import NavBar from './components/navBar';
import notFound from './components/notFound';
import Rentals from './components/rentals';
import Customers from './components/customers';
import MovieForm from './components/movieForm';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container-fluid">
        <Switch>
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={notFound} />
          <Redirect from="/" to="/movies" exact />
          <Redirect to="not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
