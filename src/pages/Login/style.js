import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  padding: 40px 0;
  justify-content: center;
  align-items: flex-start;
  height: calc(100vh - 168px);
`;

export const LoginBox = styled.div`
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

export const LoginHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const HeaderTitle = styled.p`
  color: #333438;
  font-size: 40px;
  font-weight: 600;
  margin: 0;
`;

export const LoginMain = styled.div`
  padding: 30px 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
`;