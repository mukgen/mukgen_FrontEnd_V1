import { styled } from "styled-components";

export const List = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 12px 24px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px;
  background-color: #fff;
  width: 460px;
  cursor: pointer;
`;

export const Listcontent = styled.div`
  display: flex;
  padding: 12px 0;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
`;

export const ListInfo = styled.div`
  display: flex;
  padding: 8px 0;
  width: 100%;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  justify-content: space-between;
`;

export const ListName = styled.div`
  color: #494a4f;
`;

export const ListDate = styled.div`
  color: #85858d;
`;