import React from 'react';
import {authService, firebaseInstance} from "../firebase";

const Auth = () => {
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
      }

  return (
    <button onClick={onSocialClick} name ="google">
      구글 아이디로 로그인하기
    </button>
  );
}

export default Auth;
