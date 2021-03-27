import React, { useState } from 'react';
import { dbService } from '../firebase';
import {useHistory} from 'react-router-dom';
import Input from "../materials/Input";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  `

const SignIn = ({userObj, currentInfo}) => {
    const [name, setName] = useState("");
    const [alias, setAlias] = useState("");
    const [number, setNumber] = useState("");
    const {toQuiz} = currentInfo
    const history = useHistory();
    
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
      event.preventDefault()
      if(toQuiz === true){
        await dbService.collection("users").add({
          uid: userObj.uid,
          name: name,
          alias: alias,
          number: number,
          isAdmin: false,
          available: false
        });
        alert('가입이 완료되었습니다.');
      } else if (toQuiz === false){
        await dbService.collection("users").add({
          uid: userObj.uid,
          name: name,
          alias: alias,
          number: number,
          isAdmin: false,
          available: true
      });
      alert('참관만 가능합니다.');
      }
      history.go(0);
    }

    return (
      <>
      <Wrapper>
        <h2>도전자 정보</h2>
      </Wrapper>
          <form onSubmit={onSubmit}>
            <Wrapper>
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
            placeholder = "ex)01012345678"
            pattern ="[0-9]{7}"
            required
            value = {number}
            onChange = {onChange}
            />
            <Input  
            type="submit"
            onSubmit={onSubmit}
            />
          </Wrapper>
          </form>
        </>
    );
  }

export default SignIn;