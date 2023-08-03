import React from "react";
import * as _ from "./style"; // style.js에서 export한 것을 모두 가져와서 _로 정의한다는 뜻이다.

function SignButton({
  buttontext,
  introtext,
  hreftext,
  buttonColor,
  buttonPointer,
  postLogin,
}) {
  return (
    <_.ButtonBox>
      <_.ButtonContainer
        onClick={() => buttonPointer && postLogin()}
        style={{
          backgroundColor: `${buttonColor}`,
          cursor: `${buttonPointer}`,
        }}
      >
        {buttontext}
      </_.ButtonContainer>
      <_.SignTextBox>
        <_.SignText>{introtext}</_.SignText>
        <_.Signhref>
          <_.SignhrefText>{hreftext}</_.SignhrefText>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10.6667 10L6 5.33333L7.33333 4L13.3334 10L7.33333 16L6 14.6667L10.6667 10Z"
              fill="#FF7A1B"
            />
          </svg>
        </_.Signhref>
      </_.SignTextBox>
    </_.ButtonBox>
  );
}

export default SignButton;
