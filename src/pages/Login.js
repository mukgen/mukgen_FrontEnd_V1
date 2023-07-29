import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../components/Input/Input";
import Logo from "../Icon/Logo";
import SignButton from "../components/Button/SignButton";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { toast } from "react-hot-toast";

function Login() {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies([]);
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  let notNullColor = "#C9CAD0";
  let buttonCursor;
  if (Id !== "" && Password !== "") {
    notNullColor = "#FF7A1B";
    buttonCursor = "Pointer";
  }

  const PostLogin = () => {
    if (!(Id && Password)) return;
    axios({
      method: "POST",
      url: "http://cors-anywhere.herokuapp.com/https://www.mukgen.info/auth/login/chef",
      data: {
        accountId: Id,
        password: Password,
      },
    })
      .then((res) => {
        toast.success("환영합니다!", {
          icon: "🍊",
        });
        setCookies("accessToken", res.data.accessToken);
        setCookies("refreshToken", res.data.refreshToken);
        navigate("/");
      })
      .catch((err) => {
        toast.error("네트워크를 확인해주세요!");
      });
  };

  useEffect(() => {
    if (cookies.accessToken && cookies.refreshToken) {
      navigate("/");
    }
  }, []);

  return (
    <Main>
      <LoginBox>
        <LoginHeader>
          <Logo />
          <HeaderTitle>로그인</HeaderTitle>
        </LoginHeader>
        <LoginMain>
          <InputBox>
            <Input
              title={"아이디"}
              placeholder={"아이디"}
              value={Id}
              setState={setId}
            />
            <Input
              title={"비밀번호"}
              placeholder={"비밀번호"}
              value={Password}
              setState={setPassword}
              viewpwd
            />
          </InputBox>
          <SignButton
            buttontext={"로그인"}
            introtext={"회원이 아니신가요?"}
            hreftext={"회원가입"}
            buttonColor={`${notNullColor}`}
            buttonPointer={`${buttonCursor}`}
            postLogin={PostLogin}
          />
        </LoginMain>
      </LoginBox>
    </Main>
  );
}

export default Login;

const Main = styled.div`
  display: flex;
  padding: 40px 0;
  justify-content: center;
  align-items: flex-start;
  height: calc(100vh - 168px);
`;

const LoginBox = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 600px;
  height: 700px;
  padding: 40px 100px;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background: #fff;
`;

const LoginHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const HeaderTitle = styled.p`
  color: #333438;
  font-size: 40px;
  font-weight: 600;
  margin: 0;
`;

const LoginMain = styled.div`
  padding: 30px 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
`;
