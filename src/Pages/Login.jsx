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
    padding: 20px;
    text-align: center;

  }
`;

const FormDiv = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  input {
    max-width: 100%;
  }
`;
