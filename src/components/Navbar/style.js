import styled from "styled-components";

export const Header = styled.div`
  top: 0;
  z-index: 99;
  position: fixed;
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

export const HeaderLogout = styled.div`
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
  white-space: nowrap;
  cursor: pointer;
`;
