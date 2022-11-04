import React, { useRef, useState } from "react";
import Image from "react-random-image";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ClassicSpinner } from "react-spinners-kit";
import { toast } from "react-toastify";
import styled from "styled-components";
import { fetchSignup } from "../store/action";

const CreateLogin = () => {
  const [loader, setLoader] = useState(false)
  const username = useRef();
  const password = useRef();
  const repeatPassword = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createLogin = (e) => {
    e.preventDefault();
    const body = {
      username: username.current.value,
      password: password.current.value,
      confirmPassword: repeatPassword.current.value,
    };
    setLoader(true)
    if (
      body.username.length >= 5 &&
      body.password.length >= 5 &&
      body.confirmPassword.length >= 5
    ) {
      dispatch(fetchSignup(body)).then((res) => {
        if (res.payload !== "Foydalanuvchi tuzildi!") {
          toast.error(res.payload)
        } else {
          navigate("/login");
          toast.success(res.payload)
        }
      })
    } else {
      toast.error("iltimos kataklarni 5 tadan kam toldirmang !");
    }
    setTimeout(() => {
      setLoader(false)
    }, 1500);
  };

  return (
    <Wrapper onSubmit={(e) => createLogin(e)}>
      <div className="login">
        <h1>Create login</h1>
        <FormDiv>
          <input ref={username} type="text" placeholder="username" />
          <input ref={password} type="password" placeholder="password" />
          <input
            ref={repeatPassword}
            type="password"
            placeholder="confirmPassword"
          />
          {loader ?
            <ClassicSpinner size={30} color="#686769" loading={loader} />
            :
            <button>Отправитъ</button>
          }
        </FormDiv>
        <Link to="/login">
          <span>login</span>
        </Link>
      </div>
      <Image width={1550} height={900} />
    </Wrapper>
  );
};

export default CreateLogin;

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
  @media only screen and (max-width: 610px) {
  .login{
    width: 100%;
  }
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
