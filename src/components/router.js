import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from '../routes/Auth';
import SignIn from '../routes/SignIn';
import Question from '../routes/Question';
import Hint from '../routes/Hint';
import Survivor from '../routes/Survivor';
import Descript from './Descript';
import Quizs from "../Quizs"

const AppRouter = ({isLoggedIn, userObj, hasAccount, doc_user_id, currentInfo}) => {
    return (
      <Router>
        <Switch>
          {isLoggedIn ? (
            <>
            {hasAccount ? (
              <>
              {currentInfo.showHint ?
                <Route exact path = "/">
                  <Hint
                  userObj = {userObj} 
                  doc_user_id = {doc_user_id} 
                  currentInfo = {currentInfo}/>
                </Route>
              :
              <>
              {currentInfo.toQuiz ?(
                <>
                {currentInfo.isDone ?(
                <Route exact path = "/">
                  <Survivor
                  userObj = {userObj} 
                  doc_user_id = {doc_user_id} 
                  currentInfo = {currentInfo}/>
                </Route>  
                ):(
                <Route exact path = "/">
                  <Question
                  userObj = {userObj} 
                  doc_user_id = {doc_user_id} 
                  currentInfo = {currentInfo}/>
                </Route>
              )}</>
              ):(
                  <Route path = "/">
                    <Descript
                    userObj = {userObj} 
                    doc_user_id = {doc_user_id} 
                    currentInfo = {currentInfo} />
                  </Route>
                )
              }</>
            }</>
            ):
            <Route exact path = "/">
              <SignIn
              userObj = {userObj} 
              />
            </Route>
            }</>
            ):
              <Route exact path = "/">
                <Auth />
              </Route> 
          }
        </Switch>
      </Router>
    );
}

export default AppRouter;