import React, { useState } from 'react';
import { dbService } from '../firebase';
import Input from "../materials/Input";
import styled from "styled-components";
import media from '../styles/media';
import challenger from '../assets/images/challenger.png';
import Button from '../materials/Button';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-items: center;
    ${media.tablet`\
      display: grid;
      grid-template-columns: 100%;
      grid-template-rows: 250px auto;
  `}
`

const InputWrapper = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    max-width: 100%;
    align-items: center;
    flex-direction: row;
    margin-bottom: 100px;
    
    & > button {
      margin: 0;
    }
    & > *:nth-child(n+2){
      margin-left: 15px;
      margin-top: 0;
    }
    ${media.tablet`
      flex-direction: column;
        & > input {
          width: 80%;
        }
        & > *:nth-child(n+2){
          margin-left: 0px;
          margin-top: 15px;
        }
    `}
`

const Img = styled.img`
  width: 50%;
  height: 100%;
  ${media.tablet`
  width: 100%;
  height: auto;
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
              placeholder = "이름"
              required
              value = {name}
              onChange = {onChange}
            />
            <Input 
              name = "alias"
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
            <Button type = "submit" onSubmit = {onSubmit}> 
              입장
            </Button>
          </InputWrapper>
        </form>
      </Wrapper>
    );
  }

export default SignIn;