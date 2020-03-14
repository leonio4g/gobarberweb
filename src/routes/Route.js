import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '~/pages/_layouts/auth';
import DefaultLayout from '~/pages/_layouts/default';

import {store} from '~/store';

export default function RouteWapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const {signed} = store.getState().auth;

  if(!signed && isPrivate){
    return <Redirect to="/" />
  }

  if(signed && !isPrivate){
    return <Redirect to="/dashboard" />
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props}/>
        </Layout>
      )}
    />
  )
}

RouteWapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
}

RouteWapper.defaultProps ={
  isPrivate: false,
}