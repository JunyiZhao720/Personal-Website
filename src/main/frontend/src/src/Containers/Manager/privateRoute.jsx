import React from "react"
import {Route, Redirect} from 'react-router-dom';


const PrivateRoute = ({ component: Component, isAuthenticated: isAuthenticated, redirectPath: path, ...rest }) => (

    <Route {...rest} render={(props) => (
      isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{
            pathname: path,
            state: { from: props.location }
          }} />
    )} />
  )

export default PrivateRoute;