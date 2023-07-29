import React, { useEffect } from "react";
import { styled } from "styled-components";
import MealSuggestion from "../components/MealSuggestion";
import MealReview from "../components/MealMenu";
import MealGraph from "../components/Graph/MealGraph";
import MealGrade from "../components/Graph/MealGrade";
import { useCookies } from "react-cookie";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Main() {
  const navigate = useNavigate();
  const [cookies, ,] = useCookies([]);

  const GetData = () => {
    axios({
      method: "POST",
      url: "https://www.mukgen.info/review/all",
      headers: {
        Authorization: `Bearer ${cookies.accessToken}`,
      },
    })
      .then((res) => {
        toast.success("성공적으로 데이터를 불러왔습니다.", {
          icon: "🍊",
        });
        console.log(res.data);
      })
      .catch((err) => {
        toast.error("네트워크를 확인해주세요!");
        console.log(err);
      });
  };

  useEffect(() => {
    if (!(cookies.accessToken && cookies.refreshToken)) {
      navigate("/auth/login");
    } else {
      GetData();
    }
  }, [cookies]);

  return (
    <>
      <Cover>
        <MainBox>
          <MealSuggestionBox>
            <Title>급식 건의</Title>
            <ListBox>
              <MealSuggestion />
            </ListBox>
          </MealSuggestionBox>

          <MealReviewBox>
            <Title>급식 리뷰</Title>
            <ReviewBox>
              <MealReview />
            </ReviewBox>
          </MealReviewBox>

          <MealGraphBox>
            <Title>급식 건의 통계</Title>
            <GraphBox>
              <MealGraph />
            </GraphBox>
            <Title2>
              급식 리뷰 통계<SubTitle>오늘 급식 평점</SubTitle>
            </Title2>
            <GradeBox>
              <MealGrade />
            </GradeBox>
          </MealGraphBox>
        </MainBox>
      </Cover>
    </>
  );
}
export default Main;

const Cover = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 40px;
  background-color: #f5f6f6;
  font-family: Pretendard;
  justify-content: center;
  align-items: flex-start;
`;

const MainBox = styled.div`
  display: flex;
  width: auto;
  height: auto;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 40px;
  margin: auto;
`;

//Suggestion
const MealSuggestionBox = styled.div`
  display: flex;
  width: 460px;
  height: auto;
  flex-direction: column;
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`;

//Review
const MealReviewBox = styled.div`
  display: flex;
  width: 460px;
  height: auto;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  padding: 24px 0;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
`;

const Title2 = styled.div`
  display: flex;
  padding: 40px 0 24px 0;
  align-items: center;
  gap: 12px;
  font-size: 24px;
  font-weight: 600;
`;

const SubTitle = styled.div`
  color: #ff7a1b;
  font-size: 16px;
  font-weight: 400;
`;

const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`;

//Graph
const MealGraphBox = styled.div`
  display: flex;
  width: auto;
  height: auto;
  align-items: flex-start;
  flex-direction: column;
`;

const GraphBox = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 680px;
  height: 360px;
  padding: 24px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  background-color: #fff;
  border-radius: 8px;
`;

const GradeBox = styled.div`
  display: flex;
  padding: 40px;
  align-items: center;
  gap: 40px;
  border-radius: 8px;
  background-color: #ffffff;
  width: 680px;
  height: auto;
  box-sizing: border-box;
`;
