import React, { useState } from 'react';
import {authService, firebaseInstance} from "../firebase";
import SignIn from "../routes/SignIn"

const Auth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const onSocialClick = async (event) => {
        const{
          target:{name},
        } = event;
        let provider;
        if (name ==="google"){
          provider = new firebaseInstance.auth.GoogleAuthProvider();
  
        }else if (name ==="github"){
          provider = new firebaseInstance.auth.GithubAuthProvider();
        }
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
