import styled from "styled-components";
import Image from "react-random-image";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/action";
import { toast } from "react-toastify";
import { ClassicSpinner } from "react-spinners-kit";

const Login = () => {
  const navigate = useNavigate();
  const username = useRef();
  const password = useRef();
  const dispatch = useDispatch();
  const { auth } = useSelector(store => store.reducer)
  const [loader, setLoader] = useState(false)
  const sendFormData = (e) => {
    e.preventDefault();
    const body = {
      username: username.current.value,
      password: password.current.value,
    };
    if (body.username.length > 5 || body.password.length >= 5) {
      dispatch(login(body));
      setLoader(true)
      setTimeout(() => {
        setLoader(false)
        navigate('/')
      }, 2000);
    } else {
      toast.error('kataklar 5 tadan kam bolmasin!')
    }

  };

  return (
    <Wrapper>
      <div className="login">
        <h1>Login</h1>
        <FormDiv onSubmit={(e) => sendFormData(e)}>
          <input ref={username} type="text" placeholder="username" />
          <input ref={password} type="password" placeholder="password" />
          <span>
            {loader ? <ClassicSpinner size={30} color="#686769" loading={loader} /> : <button>Отправитъ</button>}
          </span>
        </FormDiv>
        <Link to="/create-login">
          <button>Create login</button>
        </Link>
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
    box-shadow: 0 0 220px 2px rgba(255, 255, 255, 255);
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
  button {
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
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid white;
  }
`;
