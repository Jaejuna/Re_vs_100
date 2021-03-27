import React, { useState } from 'react';
import { dbService } from '../firebase';
import {useHistory} from 'react-router-dom';

const SignIn = ({userObj}) => {
    const [name, setName] = useState("");
    const [alias, setAlias] = useState("");
    const [number, setNumber] = useState("");
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
      event.preventDefault();
      await dbService.collection("users").add({
        uid: userObj.uid,
        name: name,
        alias: alias,
        number: number,
        isAdmin: false,
        available: true
      });
      alert('가입이 완료되었습니다.');
      history.go(0);
    }

    return (
          <>
          <h2>도전자 정보</h2>
          <form
          onSubmit={onSubmit}
          >
            <input 
            name = "name"
            type = "text"
            placeholder = "이름"
            required
            value = {name}
            onChange = {onChange}
            />
            <input 
            name = "alias"
            type = "text"
            placeholder = "닉네임"
            required
            value = {alias}
            onChange = {onChange}
            />
            <input 
            name = "number"
            type = "tel"
            placeholder = "010-1234-5678"
            pattern ="[0-9]{3}-[0-9]{4}-[0-9]{4}"
            required
            value = {number}
            onChange = {onChange}
            />
            <input  
            type="submit"
            onSubmit={onSubmit}
            />
          </form>
          </>
    );
  }

export default SignIn;