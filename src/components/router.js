import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from '../routes/Auth';
import SignIn from '../routes/SignIn';
import Question from '../routes/Question';
import Survivor from '../routes/Survivor';
import Descript from '../routes/Descript';

const AppRouter = ({isLoggedIn, userObj, hasAccount, doc_user_id, currentInfo}) => {
    return (
      <Router>
        <Switch>
          {
            isLoggedIn ? 
              hasAccount ?
                <>
                {
                  !currentInfo.toQuiz ? 
                    <Route exact path="/">
                      <Descript
                        isAdmin={userObj.isAdmin} 
                      />
                    </Route>
                    :
                    <Route exact path="/">
                      <Question
                        userObj = {userObj} 
                        doc_user_id = {doc_user_id} 
                        currentInfo = {currentInfo}
                      />
                    </Route>
                }
                  <Route exact path="/result" component={Survivor}/>
                </>   
                :
                <Route exact path = "/signIn">
                  <SignIn 
                  userObj={userObj}
                  currentInfo = {currentInfo}
                  />
                </Route>
            :
            <Route exact path = "/auth" component={Auth}/>
          }
        </Switch>
      </Router>
    );
}

export default AppRouter;