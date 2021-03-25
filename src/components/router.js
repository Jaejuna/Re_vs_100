import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from '../routes/Auth';
import SignIn from '../routes/SignIn';
import Question from '../routes/Question';

const AppRouter = ({isLoggedIn, userObj, hasAccount, doc_user_id, currentInfo}) => {
    return (
      <Router>
        <Switch>
          {isLoggedIn ? (
          <>
            {hasAccount ? (
                <Route exact path = "/">
                  <Question
                  userObj = {userObj} 
                  doc_user_id = {doc_user_id} 
                  currentInfo = {currentInfo}
                />
                </Route>
            ):(
            <Route exact path = "/">
              <SignIn
              userObj = {userObj} 
              />
            </Route>
            )}
          </>
          ):(
              <Route exact path = "/">
                <Auth />
              </Route>
          )}
        </Switch>
      </Router>
    );
}

export default AppRouter;