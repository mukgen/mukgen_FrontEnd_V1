import { styled } from "styled-components";

export const List = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 12px 20px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px;
  background-color: #ffe8bc;
  width: 460px;
  gap: 20px;
  cursor: pointer;
`;

export const ListMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

export const Listcontent = styled.div`
  width: 100%;
  display: ${({ bool }) => (bool ? "inline-block" : "-webkit-box")};
  margin: 10px 0;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: #000;
`;

export const ListInfo = styled.div`
  display: flex;
  padding: 4px 0px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ListName = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  color: #494a4f;
`;

export const ListDate = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  color: #fe984d;
  white-space: nowrap;
`;

export const EmojiBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 6px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 10px;
  padding: 0 2px;
`;

export const Emoji = styled.div`
  display: flex;
  padding: 4px 10px;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  background-color: #fff;
`;

export const EmojiNumber = styled.p`
  color: #85858d;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

export const BottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
