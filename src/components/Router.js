import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import SignIn from '../routes/SignIn';
import Descript from "../routes/Descript";


const AppRouter = ({isLoggedIn, usereObj}) => {
    return (
      <Router>
        <Switch>
          {isLoggedIn? (
            <>
              <Route exact path = "/">
                <Descript />
              </Route>
            </>
          ):(
              <Route exact path = "/">
                <SignIn />
              </Route>
          )}
        </Switch>
      </Router>
    );
}

export default AppRouter;