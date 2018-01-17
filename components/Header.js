import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <button><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></button>
    <button><NavLink to="/create" activeClassName="is-active">Create</NavLink></button>
    <button><NavLink to="/help" activeClassName="is-active">Help</NavLink></button>
  </header>
);

export default Header;
