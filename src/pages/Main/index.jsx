import React, { useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MealSuggestion from "../../components/MealSuggestion/index";
import MealReview from "../../components/MealReview/index";
import MealGraph from "../../components/Graph/MealGraph/index";
import MealGrade from "../../components/Graph/MealGrade/index";
import * as _ from "./style"; // style.js에서 export한 것을 모두 가져와서 _로 정의한다는 뜻이다.

function Main() {
  const [cookies, ,] = useCookies(["accessToken", "refreshToken"]); // [] 안에 써있는 이름의 cookie가 수정되면 cookie가 자동 렌더링되도록 수정함
  const [reviewData, setReview] = useState([]);
  const [suggestionData, setSuggestion] = useState([
    {
      id: 1,
      content: "dfgdfggdfg",
      likeCount: 5,
      dislikeCount: 4,
      createdAt: "2023-09-01T09:20:28.223465",
      checked: false,
    },
    {
      id: 2,
      content: "ㅣ자스",
      likeCount: 2,
      dislikeCount: 0,
      createdAt: "2023-09-02T13:17:19.743531",
      checked: false,
    },
    {
      id: 3,
      content: "먹젠 플러터 ㄹㅈㄷ",
      likeCount: 22,
      dislikeCount: 1,
      createdAt: "2023-09-02T13:18:39.052306",
      checked: false,
    },
  ]);
  const navigate = useNavigate();

  const GetData = useCallback(() => {
    // 렌더링되면 함수가 다시 만들어지는데 그걸 방지하기 위해서 수정함
    axios({
      method: "GET", // GET으로 요청해야하는데 POST로 되어있어 수정함
      url: "https://stag-server.xquare.app/mukgen/review/all",
      headers: {
        Authorization: `Bearer ${cookies.accessToken}`,
        "X-Not-Using-Xquare-Auth": true,
      },
    })
      .then((res) => {
        toast.success("성공적으로 데이터를 불러왔습니다.", {
          icon: "🍊",
        });
        setReview(res.data.reviewMaximumResponseList);
        // 서비스 중 data가 콘솔에 나타나면 안되기에 console 주석 처리
        // console.log(res.data);
      })
      .catch((err) => {
        toast.error("네트워크를 확인해주세요!");
        // 이 오류도 마찬가지로 주석 처리
        // console.log(err);
      });
  }, [cookies]);

  const GetSugData = useCallback(() => {
    axios({
      method: "GET", // GET으로 요청해야하는데 POST로 되어있어 수정함
      url: "https://stag-server.xquare.app/mukgen/meal-suggestion/list",
      headers: {
        Authorization: `Bearer ${cookies.accessToken}`,
        "X-Not-Using-Xquare-Auth": true,
      },
    })
      .then((res) => {
        toast.success("성공적으로 데이터를 불러왔습니다.", {
          icon: "🍊",
        });
        setSuggestion(res.data.mealSuggestionResponseList);
      })
      .catch((err) => {
        toast.error("네트워크를 확인해주세요!");
        // 이 오류도 마찬가지로 주석 처리
        // console.log(err);
      });
  }, [cookies]);

  // useEffect(() => {
  //   if (!(cookies.accessToken && cookies.refreshToken)) {
  //     navigate("/auth/login");
  //   } else {
  //     GetData();
  //     GetSugData();
  //   }
  // }, [cookies, navigate, GetData, GetSugData]); // [] 안에 상수가 수정되면 실행되게 수정함

  // <_.Cover></_.Cover>로 감싸기에 <>은 필요없어 삭제함

  return (
    <_.Cover>
      <_.MainBox>
        <_.MealSuggestionBox>
          <_.Title>급식 건의</_.Title>
          <_.ListBox>
            {suggestionData.map((v, i) => (
              <MealSuggestion data={v} />
            ))}
          </_.ListBox>
        </_.MealSuggestionBox>

        <_.MealReviewBox>
          <_.Title>급식 리뷰</_.Title>
          <_.ReviewBox>
            {reviewData.map((v, i) => (
              <MealReview key={`${v.content}${i}`} data={v} />
            ))}
          </_.ReviewBox>
        </_.MealReviewBox>

        <_.MealGraphBox>
          <_.Title>급식 건의 통계</_.Title>
          <_.GraphBox>
            <MealGraph />
          </_.GraphBox>
          <_.Title2>
            급식 리뷰 통계<_.SubTitle>오늘 급식 평점</_.SubTitle>
          </_.Title2>
          <_.GradeBox>
            <MealGrade />
          </_.GradeBox>
        </_.MealGraphBox>
      </_.MainBox>
    </_.Cover>
  );
}
export default Main;
