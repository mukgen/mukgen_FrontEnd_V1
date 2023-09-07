import React, { useState } from "react";
import { toast } from "react-hot-toast";
import * as _ from "./style"; // 파일 분리
import Heart from "../../Icon/Heart";
import Reject from "../../Icon/Reject";
import ChooseButton from "../Button/ChooseButton";
import Check from "../../Icon/Check";

function MealSuggestion({ data }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [checkColor, setCheckColor] = useState("#FFD382");
  const openModal = () => {
    setModalOpen(!modalOpen);
  };
  const toggleCheckColor = () => {
    setCheckColor(checkColor === "#FF7A1B" ? "#FFD382" : "#FF7A1B");
  };

  const createData = new Date(data.createdAt);
  const year = createData.getFullYear().toString().slice(2);
  const month = (createData.getMonth() + 1).toString().padStart(2, "0");
  const day = createData.getDate().toString().padStart(2, "0");
  const hours = createData.getHours().toString().padStart(2, "0");
  const minutes = createData.getMinutes().toString().padStart(2, "0");

  const formattedDate = `${year}.${month}.${day} ${hours}:${minutes}`;

  const PostLogin = () => {
    if (!(Id && Password)) return;
    axios({
      method: "POST",
      url: "https://stag-server.xquare.app/mukgen/meal-suggestion/check/{mealSuggestionId}",
      headers: {
        Authorization: `Bearer ${cookies.accessToken}`,
        "X-Not-Using-Xquare-Auth": true,
      },
    })
      .then((res) => {
        toast.success("수락되었습니다", {
          icon: "✅",
        });
      })
      .catch((err) => {
        toast.error("네트워크를 확인해주세요!");
      });
  };

  return (
    <>
      <_.List onClick={openModal}>
        <_.ListMain>
          <_.ListInfo>
            <_.ListName>ㅇㅇ</_.ListName>
            <Check fillColor={checkColor} />
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
              buttonText="수락"
              okButton
            />
          </_.ButtonBox>
        )}
      </_.List>
    </>
  );
}

export default MealSuggestion;
