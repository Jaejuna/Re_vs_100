import React, { useEffect, useState } from 'react';
import { authService } from '../firebase';
import Auth from '../routes/Auth';
import SignIn from '../routes/SignIn';
import Title from '../routes/Title';
import AppRouter from './Router';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid
        });
      }else{
        setUserObj(null);
      }
      setInit(true);
    })
  }, []);

  return (
    <>
      {init ? (
        <>
        <AppRouter />
        </>
      ):(
        "Initializing..."
      )}
    </>
  );
}

export default App;
