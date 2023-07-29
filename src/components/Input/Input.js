import React, { useState } from "react";
import * as _ from "./style";
import { type } from "@testing-library/user-event/dist/type";

function Input({ title, placeholder, viewpwd, value, setState, NoSameText }) {
  const [view, setView] = useState(viewpwd ?? false);
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleChange = (e) => {
    setState(e.target.value);
  };
  const getBorderColor = () => {
    if (value !== "") {
      return isFocused ? "#FE6B01" : "#494A4F";
    } else {
      return isFocused ? "#FE6B01" : "#C9CAD0";
    }
  };
  return (
    <_.InputBox>
      <_.InputTitle>{title}</_.InputTitle>
      <_.InputContainer style={{ borderColor: `${getBorderColor()}` }}>
        <_.Input
          type={view ? "password" : "text"}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={placeholder}
        />
        {viewpwd &&
          (view ? (
            <svg
              onClick={() => setView(false)}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 5C7 5 2.73 8.10997 1 12.4999C2.73 16.8899 7 19.9999 12 19.9999C17 19.9999 21.27 16.8899 23 12.4999C21.27 8.10997 17 5 12 5ZM12 17.4999C9.24 17.4999 7 15.2599 7 12.4999C7 9.73995 9.24 7.49998 12 7.49998C14.76 7.49998 17 9.73995 17 12.4999C17 15.2599 14.76 17.4999 12 17.4999ZM12 9.49996C10.34 9.49996 9 10.8399 9 12.4999C9 14.1599 10.34 15.4999 12 15.4999C13.66 15.4999 15 14.1599 15 12.4999C15 10.8399 13.66 9.49996 12 9.49996Z"
                fill="black"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setView(true)}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 5.06577C17 5.06577 21.27 8.17574 23 12.5657C22.342 14.2354 21.3165 15.72 20.0232 16.9187L16.8579 13.7534C16.9508 13.3727 17 12.9749 17 12.5657C17 9.80572 14.76 7.56574 12 7.56574C11.5908 7.56574 11.1931 7.61498 10.8123 7.70784L8.65206 5.54757C9.71335 5.23405 10.8369 5.06577 12 5.06577Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 12.5657C2.73 16.9557 7 20.0656 12 20.0656C13.8043 20.0656 15.5134 19.6607 17.0425 18.9367L18.8492 20.7434C19.2398 21.134 19.8729 21.134 20.2635 20.7434C20.654 20.3529 20.654 19.7197 20.2635 19.3292L4.70711 3.77287C4.31658 3.38235 3.68342 3.38235 3.29289 3.77287C2.90237 4.1634 2.90237 4.79656 3.29289 5.18709L5.27467 7.16886C5.21828 7.20803 5.16226 7.24768 5.10659 7.2878C3.27742 8.60617 1.83959 10.4352 1 12.5657ZM7 12.5657C7 15.3257 9.24 17.5656 12 17.5656C13.0407 17.5656 14.0075 17.2471 14.8082 16.7024L13.3517 15.2459C12.9458 15.4505 12.4866 15.5657 12 15.5657C10.34 15.5657 9 14.2257 9 12.5657C9 12.0791 9.11517 11.6199 9.3198 11.214L7.86331 9.75751C7.84911 9.77838 7.83506 9.79936 7.82117 9.82045C7.30212 10.6086 7 11.5521 7 12.5657Z"
                fill="black"
              />
            </svg>
          ))}
      </_.InputContainer>
      <_.NoSamePwd>
        {NoSameText && "아이디나 비밀번호가 맞지 않습니다."}
      </_.NoSamePwd>
    </_.InputBox>
  );
}

export default Input;
