import React, { useState } from 'react';
import styled from 'styled-components';
import {authService, firebaseInstance} from "../firebase";
import Button from '../materials/Button';
import SignIn from "./SignIn"
import quizLogo from '../assets/images/quizLogo.png';
import media from '../styles/media';

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-rows: repeat(2, 1fr);
  text-align: center;
  justify-items: center;
  ${media.tablet`
    grid-template-columns: 100%;
    grid-template-rows: 300px auto;
  `}
`

const MyButton = styled(Button)`
  width: 300px;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  ${media.tablet`
    width: 100%;
    height: 180px;
  `}
`

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onSocialClick = async () => {
    const provider = new firebaseInstance.auth.GoogleAuthProvider();
    await authService.signInWithPopup(provider);
  }

  const refresh = () => {
    window.location.reload(false);
  }

  return (
    <>
    { isLoggedIn ?
    <>
      <SignIn/>
      {refresh}
    </>
      :
      <Wrapper>
        <Img src={quizLogo}/>
        <MyButton onClick={onSocialClick} name ="google">
          구글 아이디로 로그인하기
        </MyButton>
      </Wrapper>
    }
    </>
  );
}

export default Auth;
