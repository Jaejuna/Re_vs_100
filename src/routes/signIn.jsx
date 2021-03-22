import React, { useState } from 'react';
import { dbService } from '../firebase';

const SignIn = () => {
    const [name, setName] = useState();
    const [alias, setAlias] = useState("");
    const [number, setNumber] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const onChange = (event) => {
      const {
        target: {name, value}} = event;
      if (name === "name"){
        setName(value);
      } else if (name === "alias"){
        setAlias(value);
      } else if (name === "number"){
        setNumber(value);
      }
    };

    const onSubmit = async () => {
      await dbService.collection('user').add({
        username: name.username,
        alias,
        number
      });
    }
  
    return (
      <>
        <div>
          <h2>도전자 정보</h2>
          <form onSubmit = {onSubmit}>
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
            type = "number"
            placeholder = "전화번호"
            required
            value = {number}
            onChange = {onChange}
            />
            <input onSubmit = {onSubmit}
            type="submit"
            className="authInput"
            value={newAccount ? "Create Account" : "Sign In"}
            />
            {error && <span>{error}</span>}
          </form>
        </div>
      </>
    );
  }

export default SignIn;