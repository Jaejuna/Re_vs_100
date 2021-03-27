import React, { useState } from 'react';
import styled from 'styled-components';
import {authService, firebaseInstance} from "../firebase";
import Button from '../materials/Button';
import SignIn from "./SignIn"

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MyButton = styled(Button)`
  width: 500px;
`

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
      <Wrapper>
        <MyButton onClick={onSocialClick} name ="google">
          구글 아이디로 로그인하기
        </MyButton>
      </Wrapper>
    }
    </>
  );
}

export default Auth;
