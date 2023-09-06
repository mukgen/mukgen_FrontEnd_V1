import React, { useState } from "react";
import * as _ from "./style"; // 파일 분리
import ModalMain from "../Modal/ModalMain";
import Star from "../Modal/Star";

function MealReview({ data }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
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
      <_.Review onClick={openModal}>
        <_.StarBox>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="49"
            viewBox="0 0 48 49"
            fill="none"
          >
            <path
              d="M23.3799 34.3603C23.7613 34.1301 24.2387 34.1301 24.6201 34.3603L32.6892 39.2305C33.598 39.779 34.7191 38.9642 34.4779 37.9305L32.3366 28.7514C32.2354 28.3176 32.3828 27.8634 32.7194 27.5717L39.8503 21.3943C40.6526 20.6992 40.2238 19.3813 39.166 19.2916L29.779 18.4952C29.3355 18.4575 28.9493 18.1775 28.7756 17.7677L25.1049 9.10684C24.6914 8.13121 23.3086 8.13121 22.8951 9.10684L19.2244 17.7677C19.0507 18.1775 18.6645 18.4575 18.221 18.4952L8.83396 19.2916C7.77625 19.3813 7.34736 20.6992 8.14967 21.3943L15.2806 27.5717C15.6172 27.8634 15.7646 28.3176 15.6634 28.7514L13.5221 37.9305C13.2809 38.9642 14.402 39.779 15.3108 39.2305L23.3799 34.3603Z"
              fill="#FF7A1B"
            />
          </svg>
          <_.StarNumber>{data.count}</_.StarNumber>
        </_.StarBox>
        <_.ReviewcontentBox>
          <_.Reviewcontent>{data.content}</_.Reviewcontent>
          <_.ReviewInfo>
            <_.ReviewName>{data.userNickname}</_.ReviewName>
            <_.ReviewDate>{formattedDate}</_.ReviewDate>
          </_.ReviewInfo>
        </_.ReviewcontentBox>
      </_.Review>
      {modalOpen && (
        <ModalMain
          title="급식 리뷰"
          closeModal={() => setModalOpen(false)}
          starRating={Star(data.count)}
          data={data}
          createDate={formattedDate}
        />
      )}
    </>
  );
}
export default MealReview;
