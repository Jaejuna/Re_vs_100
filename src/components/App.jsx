import React, { useEffect, useState } from 'react';
import { authService, dbService } from '../firebase';
import AppRouter from './Router';

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const [hasAccount, setHasAccount] = useState(false);
  const [docUserId, setDocUserId] = useState('');
  const [currentInfo, setCurrentInfo] = useState({currentQuiz:0, showWrongs:false});

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
    <>
      {init ? (
        <>
        <AppRouter 
        isLoggedIn = {Boolean(userObj)} 
        userObj = {userObj}
        hasAccount={hasAccount} 
        doc_user_id={docUserId}
        currentInfo={currentInfo}/>
        </>
      ):(
        "Initializing..."
      )}
    </>
  );
}

export default App;
