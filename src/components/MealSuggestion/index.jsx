import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useCookies } from "react-cookie";
import axios from "axios";
import * as _ from "./style"; // 파일 분리
import Heart from "../../Icon/Heart";
import Reject from "../../Icon/Reject";
import ChooseButton from "../Button/ChooseButton";
import Check from "../../Icon/Check";
function MealSuggestion({ data }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [checkColor, setCheckColor] = useState(false);
  const [cookies, ,] = useCookies(["accessToken", "refreshToken"]); // [] 안에 써있는 이름의 cookie가 수정되면 cookie가 자동 렌더링되도록 수정함
  const openModal = () => {
    setModalOpen(!modalOpen);
  };
  const toggleCheckColor = () => {
    setCheckColor(!checkColor);
    PostCheck();
  };
  const PostCheck = () => {
    axios({
      method: "POST",
      url: `https://stag-server.xquare.app/mukgen/meal-suggestion/check/${data.id}`,
      headers: {
        Authorization: `Bearer ${cookies.accessToken}`,
        "X-Not-Using-Xquare-Auth": true,
      },
    })
      .then((res) => {
        toast.success(`${checkColor ? "취소" : "수락"}되었습니다`, {
          icon: "✅",
        });
      })
      .catch((err) => {
        toast.error("네트워크를 확인해주세요!");
        console.log(err);
      });
  };
  const createData = new Date(data.createdAt);
  const year = createData.getFullYear().toString().slice(2);
  const month = (createData.getMonth() + 1).toString().padStart(2, "0");
  const day = createData.getDate().toString().padStart(2, "0");
  const hours = createData.getHours().toString().padStart(2, "0");
  const minutes = createData.getMinutes().toString().padStart(2, "0");

  const formattedDate = `${year}.${month}.${day} ${hours}:${minutes}`;

  return (
    <>
      <_.List onClick={openModal}>
        <_.ListMain>
          <_.ListInfo>
            <_.ListName>ㅇㅇ</_.ListName>
            <Check fillColor={checkColor ? "#FF7A1B" : "#FFD382"} />
          </_.ListInfo>
          <_.Listcontent bool={modalOpen}>{data.content}</_.Listcontent>

          <_.BottomBox>
            <_.ListDate>{formattedDate}</_.ListDate>
            <_.EmojiBox>
              <_.Emoji>
                <Heart />
                <_.EmojiNumber>{data.likeCount}</_.EmojiNumber>
              </_.Emoji>
              <_.Emoji>
                <Reject />
                <_.EmojiNumber>{data.dislikeCount}</_.EmojiNumber>
              </_.Emoji>
            </_.EmojiBox>
          </_.BottomBox>
        </_.ListMain>
        {modalOpen && (
          <_.ButtonBox>
            <ChooseButton
              onClick={toggleCheckColor}
              getCheck={checkColor}
              buttonText={checkColor ? "취소" : "수락"}
            />
          </_.ButtonBox>
        )}
      </_.List>
    </>
  );
}

export default MealSuggestion;
