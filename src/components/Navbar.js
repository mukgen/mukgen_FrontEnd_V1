import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Icon/Logo";

function Navbar() {
  const navigate = useNavigate();
  return (
    <Header>
      <Logo subTitle />
      <HeaderLogout onClick={() => navigate("/auth/login")}>
        로그인
      </HeaderLogout>
    </Header>
  );
}

export default Navbar;

const Header = styled.div`
  top: 0;
  z-index: 999;
  position: sticky;
  display: flex;
  padding: 20px 120px;
  align-items: center;
  align-self: stretch;
  background-color: #fff;
  justify-content: space-between;
  font-family: Pretendard;
  width: 100%;
  box-sizing: border-box;
`;

const HeaderLogout = styled.div`
  display: flex;
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #ffe1cc;
  text-decoration: none;

  color: #fe6b01;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
