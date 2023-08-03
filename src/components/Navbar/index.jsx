import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Icon/Logo";
import * as _ from "./style"; // 파일 분리

function Navbar() {
  const navigate = useNavigate();
  return (
    <_.Header>
      <Logo subTitle />
      <_.HeaderLogout onClick={() => navigate("/auth/login")}>
        로그인
      </_.HeaderLogout>
    </_.Header>
  );
}

export default Navbar;


