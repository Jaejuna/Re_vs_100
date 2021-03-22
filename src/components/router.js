import React from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import SignIn from '../routes/SignIn';
import Descript from "../routes/Descript";


const AppRouter = ({isLoggedIn, usereObj}) => {
    return (
      <Router>
        {isLoggedIn}
        <Switch>
          {isLoggedIn? (
            <>
              <Route exact path = "/">
                <Descript/>
              </Route>
            </>
          ):(
            <>
              <Route exact path = "/signIn">
                <SignIn />
              </Route>
              <Redirect from ="*" to = "/" />
            </>
          )}
        </Switch>
      </Router>
    );
}

export default AppRouter;