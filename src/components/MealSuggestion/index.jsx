import React, { useState } from "react";
import * as _ from "./style"; // 파일 분리
import Heart from "../../Icon/Heart";
import Reject from "../../Icon/Reject";
import ChooseButton from "../Button/ChooseButton";
import Check from "../../Icon/Check";
import Uncheck from "../../Icon/Uncheck";

function MealSuggestion() {
  const [modalOpen, setModalOpen] = useState(false);
  const [checkColor, setCheckColor] = useState("#FFD382");
  const [rejectButton, setRejectButton] = useState(true);
  const openModal = () => {
    setModalOpen(!modalOpen);
  };
  const toggleCheckColor = () => {
    setCheckColor(checkColor === "#FF7A1B" ? "#FFD382" : "#FF7A1B");
  };
  const toggleRejectButton = () => {
    setRejectButton(!rejectButton);
    setCheckColor("#FFD382");
  };

  return (
    <>
      <_.List onClick={openModal}>
        <_.ListMain>
          <_.ListInfo>
            <_.ListName>이태영</_.ListName>
            {rejectButton ? <Check fillColor={checkColor} /> : <Uncheck />}
          </_.ListInfo>
          <_.Listcontent bool={modalOpen}>
            햄스터는 작고 귀여운 설치류 동물로, 애완동물로 인기가 높다.
            밤행성이라 주로 밤에 활동하며 차분한 성격과 다양한 모습이
            매력적이다. 작은 몸에 부드러운 모피와 귀여운 눈이 특징이
          </_.Listcontent>

          <_.BottomBox>
            <_.ListDate>23.05.07 10:32</_.ListDate>
            <_.EmojiBox>
              <_.Emoji>
                <Heart />
                <_.EmojiNumber>31</_.EmojiNumber>
              </_.Emoji>
              <_.Emoji>
                <Reject />
                <_.EmojiNumber>133</_.EmojiNumber>
              </_.Emoji>
            </_.EmojiBox>
          </_.BottomBox>
        </_.ListMain>
        {modalOpen && (
          <_.ButtonBox>
            <ChooseButton onClick={toggleRejectButton} buttonText="거절" />
            <ChooseButton
              onClick={toggleCheckColor}
              buttonText="수락"
              okButton
            />
          </_.ButtonBox>
        )}
      </_.List>
      {/* {modalOpen && (
        <ModalMain title="급식 건의" closeModal={() => setModalOpen(false)} />
      )} */}
    </>
  );
}

export default MealSuggestion;
