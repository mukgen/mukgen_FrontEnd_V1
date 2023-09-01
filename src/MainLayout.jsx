import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

function MainLayout() {
  return (
    <Div>
      <Navbar />
      <Outlet />
    </Div>
  );
}

export default MainLayout;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
