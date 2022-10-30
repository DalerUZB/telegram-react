import React from "react";
import styled from "styled-components";
import Image from "react-random-image";

const Login = () => {
  return (
    <Wrapper>
      <div className="login">
        <h1>Login</h1>
        <FormDiv>
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>Отправитъ</button>
        </FormDiv>
      </div>
      <Image width={1550} height={900} />
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  .login {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: black;
    width: 50%;
    min-height: 50%;
    border-radius: 8px;
    transition: 0.3s all cubic-bezier(0.19, 1, 0.22, 1);
    padding: 20px;
    text-align: center; 
    box-shadow: 0 0 220px 2px rgba(255,255,255,255);
    
  }
`;

const FormDiv = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 20px;
  input {
    height: 49px;
    max-width: 100px;
    border-radius: 4px;
    outline: 0;
    border: none;
    transition: 0.3s all;
    padding-left: 4px;
  }
  button{
   width: 100px;
   border: none;
   padding: 8px 16px;
   border-radius: 4px;
  }
  input:focus {
    height: 49px;
    max-width: 100%;
    border-radius: 8px;
    padding-left: 3px;
    font-size: 15px;
    background:rgba(0,0,0,0.4);
    border: 1px solid white;
  }
`;
