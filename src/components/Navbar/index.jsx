import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Icon/Logo/index";
import * as _ from "./style"; // 파일 분리
import { useCookies } from "react-cookie";

function Navbar() {
  const [cookies, , removeCookies] = useCookies([
    "accessToken",
    "refreshToken",
  ]);
  const navigate = useNavigate();
  return (
    <_.Header>
      <Logo subTitle />
      {cookies.accessToken && cookies.refreshToken ? (
        <_.HeaderLogout
          onClick={() => {
            removeCookies("accessToken");
            removeCookies("refreshToken");
          }}
        >
          로그아웃
        </_.HeaderLogout>
      ) : (
        <_.HeaderLogout onClick={() => navigate("/auth/login")}>
          로그인
        </_.HeaderLogout>
      )}
    </_.Header>
  );
}

export default Navbar;
