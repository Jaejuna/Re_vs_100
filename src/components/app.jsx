import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { authService, dbService } from '../firebase';
import MainWrapper from '../MainWrapper';
import theme from '../theme';
import AppRouter from '../components/Router';
import Descript from './Descript';

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const [hasAccount, setHasAccount] = useState(false);
  const [docUserId, setDocUserId] = useState('');
  const [currentInfo, setCurrentInfo] = useState({currentQuiz:0, showAnswer:false, showHint:false, toQuiz:false, isDone:false});

  useEffect(() => {
    authService.onAuthStateChanged(async (user) => {
      if (user) {
        const users = await dbService.collection('users').where('uid','==',user.uid).get();
        setHasAccount(Boolean(users.docs.length))
        try{
          setUserObj(users.docs[0].data());
          setDocUserId(users.docs[0].id);
        }catch(e){
          setUserObj(user)
        }
      }
      else{
        setUserObj(null);
      }
      setInit(true);
    });
  dbService.collection('current').doc('current').onSnapshot(data => {
    setCurrentInfo(data.data())
  });
  }, []);

  useEffect(() => {
    if(!docUserId)
      return;
    dbService.collection('users').doc(docUserId).onSnapshot(snap => {
      setUserObj(snap.data());
    })
  },[docUserId])

  return (
    // 여기는 테마 적용하기 위한 컴포넌트!
    <ThemeProvider theme={theme}>
      <MainWrapper>
        {init ? 
          // <AppRouter 
          //   isLoggedIn = {Boolean(userObj)} 
          //   userObj = {userObj}
          //   hasAccount={hasAccount} 
          //   doc_user_id={docUserId}
          //   currentInfo={currentInfo}
          // />
          <Descript/>
        :
          <div>
          "Initializing..."
          </div>
        }
      </MainWrapper>
    </ThemeProvider>
  );
}

export default App;
