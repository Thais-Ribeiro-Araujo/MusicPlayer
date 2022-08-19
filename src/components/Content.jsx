import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import TrybeTunesIcon from './TrybeTunesIcon';
import Login from '../pages/Login';
import Search from '../pages/Search';
import Album from '../pages/Album';
import Favorites from '../pages/Favorites';
import Profile from '../pages/Profile';
import ProfileEdit from '../pages/ProfileEdit';
import NotFound from '../pages/NotFound';

export default class Content extends Component {
  constructor() {
    super();

    this.state = {
      isLogged: localStorage.getItem('user') !== null,
    };
  }

  render() {
    const { isLogged } = this.state;
    return (
      <>
        { isLogged
          ? (
            <>
              <TrybeTunesIcon />
              <Header />
            </>) : <TrybeTunesIcon />}
        <main className={ isLogged ? '' : 'login-page' }>
          <Switch>
            <Route exact path="/">
              { isLogged
                ? <Redirect to="/search" />
                : <Login handleSubmit={ () => { this.setState({ isLogged: true }); } } />}
            </Route>
            <Route path="/search" component={ Search } />
            <Route path="/album/:id" component={ Album } />
            <Route path="/favorites" component={ Favorites } />
            <Route exact path="/profile" render={ () => <Profile handleLogOut={ () => this.setState({ isLogged: false})} /> } />
            <Route path="/profile/edit" component={ ProfileEdit } />
            <Route path="*" component={ NotFound } />
          </Switch>
        </main>
      </>
    );
  }
}
