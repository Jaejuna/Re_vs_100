import React, { useState } from 'react';
import { dbService } from '../firebase';
import Input from "../materials/Input";
import styled from "styled-components";
import media from '../styles/media';
import challenger from '../assets/images/challenger.png';

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  justify-items: center;
  grid-template-columns: 100%;
  grid-template-rows: repeat(1, 2fr);
`

const InputWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  max-width: 100%;
  align-items: center;
  ${media.tablet`
    display: grid;
    grid-template-rows: auto auto auto 180px;
  `}
`

const Img = styled.img`
  width: 45%;
  height: 100%;
  ${media.tablet`
  width: 70%;
  `}
`

const SignIn = ({userObj, currentInfo}) => {
    const [name, setName] = useState("");
    const [alias, setAlias] = useState("");
    const [number, setNumber] = useState("");
    const {toQuiz} = currentInfo
    
    const onChange = (event) => {
      const {target: {name, value}} = event;
      if (name === "name"){
        setName(value);
      } else if (name === "alias"){
        setAlias(value);
      } else if (name === "number"){
        setNumber(value);
      }
    };

    const onSubmit = async (event) => {
      event.preventDefault();
      await dbService.collection("users").doc(userObj.uid).set({
          uid: userObj.uid,
          name,
          alias,
          number,
          isAdmin: false,
          available: !toQuiz,
          quiz_1: 0,
          quiz_2: 0,
          quiz_3: 0,
          quiz_4: 0,
          quiz_5: 0,
          quiz_6: 0,
          quiz_7: 0,
          quiz_8: 0
      });
      alert(toQuiz ? '참관만 가능합니다.' : '가입이 완료되었습니다.');
      window.location.reload(false);
    }

    return (
      <Wrapper>
        <Img src = {challenger} />
          <form onSubmit={onSubmit}>
            <InputWrapper>
            <Input
            name = "name"
            type = "text"
            placeholder = "이름"
            required
            value = {name}
            onChange = {onChange}
            />
            <Input 
            name = "alias"
            type = "text"
            placeholder = "닉네임"
            required
            value = {alias}
            onChange = {onChange}
            />
            <Input 
            name = "number"
            type = "tel"
            placeholder = "ex) 01012345678"
            pattern ="[0-9]{11}"
            required
            value = {number}
            onChange = {onChange}
            />
            <Input  
            type = "submit"
            onSubmit = {onSubmit}
            />
            </InputWrapper>
          </form>
        </Wrapper>
    );
  }

export default SignIn;