  
import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from '../routes/Auth';
import SignIn from '../routes/SignIn';
import Question from '../routes/Question';
import Survivor from '../routes/Survivor';
import Descript from '../routes/Descript';
import Draw from '../routes/Draw';

const AppRouter = ({isLoggedIn, userObj, hasAccount, doc_user_id, currentInfo}) => {
  const {toQuiz, isDone} = currentInfo;
    return (
      <Router>
        <Switch>
          {
            isLoggedIn ? 
              hasAccount ?
                <>
                {
                  !toQuiz ? 
                    <Route exact path="/">
                      <Descript
                        isAdmin={userObj.isAdmin} 
                      />
                    </Route>
                    :
                    <>
                    {
                      isDone ?
                        <>
                        <Route exact path="/">
                          <Survivor
                            userObj = {userObj} 
                            currentInfo = {currentInfo}
                          />
                        </Route>
                        {
                          userObj?.isAdmin &&
                          <Route exact path="/draw">
                            <Draw
                              userObj = {userObj} 
                            />
                          </Route>
                        }
                      </>
                      :
                    <Route exact path="/">
                      <Question
                        userObj = {userObj} 
                        doc_user_id = {doc_user_id} 
                        currentInfo = {currentInfo}
                      />
                    </Route>
                    }
                  </>
                }
                </>   
                :
                <Route exact path="/">
                  <SignIn 
                  userObj={userObj}
                  currentInfo = {currentInfo}
                  />
                </Route>
            :
            <Route exact path="/">
              <Auth currentInfo = {currentInfo}/>
            </Route>
          }
        </Switch>
      </Router>
    );
}

export default AppRouter;