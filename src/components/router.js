import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from '../routes/Auth';
import SignIn from '../routes/SignIn';
import Question from '../routes/Question';
import Survivor from '../routes/Survivor';
import Descript from './Descript';
import TestPage from '../TestPage';

const AppRouter = ({isLoggedIn, userObj, hasAccount, doc_user_id, currentInfo}) => {
    return (
      <Router>
        <Switch>
          {/* 여기는 그냥 테스트 컴포넌트용!!! 나중에 지울게~ */}
          <Route exact path="/testpage" component={TestPage}/>
          {
            isLoggedIn ? 
              hasAccount ?
                <>
                  <Route path = "/descript">
                    <Descript
                      userObj = {userObj} 
                      doc_user_id = {doc_user_id} 
                      currentInfo = {currentInfo} 
                    />
                  </Route>
                  <Route exact path="/">
                    <Question
                      userObj = {userObj} 
                      doc_user_id = {doc_user_id} 
                      currentInfo = {currentInfo}
                    />
                  </Route>
                  <Route exact path="/result" component={Survivor}/>
               </>   
                :
                <Route exact path = "/">
                  <SignIn userObj={userObj} />
                </Route>
            :
            <Route exact path = "/" component={Auth}/>
          }
        </Switch>
      </Router>
    );
}

export default AppRouter;