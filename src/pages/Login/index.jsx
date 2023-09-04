import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { toast } from "react-hot-toast";
import axios from "axios";
import SignButton from "../../components/Button/SignButton/index";
import Input from "../../components/Input/index";
import Logo from "../../Icon/Logo/index";
import * as _ from "./style"; // style.js에서 export한 것을 모두 가져와서 _로 정의한다는 뜻이다.
import { useMediaQuery } from "react-responsive";

function Login() {
  const isMobile = useMediaQuery({
    query: "(max-width:600px)",
  });

  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["accessToken", "refreshToken"]); // [] 안에 써있는 이름의 cookie가 수정되면 cookie가 자동 렌더링되도록 수정함
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
      url: "https://stag-server.xquare.app/mukgen/auth/login/chef",
      headers: {
        "X-Not-Using-Xquare-Auth": true,
      },
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
        console.log(err);
      });
  };

  useEffect(() => {
    if (cookies.accessToken && cookies.refreshToken) {
      navigate("/");
    }
  }, [cookies.accessToken, cookies.refreshToken, navigate]);

  return (
    <_.Main>
      <_.LoginBox>
        <_.LoginHeader>
          <Logo />
          <_.HeaderTitle>로그인</_.HeaderTitle>
        </_.LoginHeader>
        <_.LoginMain>
          <_.InputBox>
            <Input
              title={"아이디"}
              placeholder={"아이디"}
              value={Id}
              setValue={setId}
            />
            <Input
              title={"비밀번호"}
              placeholder={"비밀번호"}
              value={Password}
              setValue={setPassword}
              viewpwd
            />
          </_.InputBox>
          <SignButton
            buttontext={"로그인"}
            introtext={"회원이 아니신가요?"}
            hreftext={"회원가입"}
            buttonColor={`${notNullColor}`}
            buttonPointer={`${buttonCursor}`}
            postLogin={PostLogin}
          />
        </_.LoginMain>
      </_.LoginBox>
    </_.Main>
  );
}

export default Login;
