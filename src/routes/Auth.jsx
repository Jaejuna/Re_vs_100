import React, { useState } from 'react';
import {authService, firebaseInstance} from "../firebase";
import SignIn from "./SignIn"

const Auth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const onSocialClick = async () => {
        const provider = new firebaseInstance.auth.GoogleAuthProvider();
        await authService.signInWithPopup(provider);
        setIsLoggedIn(true);
      }

  return (
    <>
    { isLoggedIn ?
      <SignIn />
      :
    <button onClick={onSocialClick} name ="google">
      구글 아이디로 로그인하기
    </button>
    }
    </>
  );
}

export default Auth;
