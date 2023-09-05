import React, { useCallback, useEffect, useState } from "react";
import Score from "./Score"; // 깔끔하게 보기위해 파일을 나누었다.
import * as _ from "./style"; // style.js에서 export한 것을 모두 가져와서 _로 정의한다는 뜻이다.
import { useCookies } from "react-cookie";
import axios from "axios";

function MealGrade() {
  const [sum, setSum] = useState(0);
  const [avg, setAVG] = useState(0);
  const [cookies, ,] = useCookies(["accessToken", "refreshToken"]); // [] 안에 써있는 이름의 cookie가 수정되면 cookie가 자동 렌더링되도록 수정함
  const [statisticsData, setStatistics] = useState([]);

  const GetReview = useCallback(() => {
    axios({
      method: "GET",
      url: "https://stag-server.xquare.app/mukgen/review/statistics",
      headers: {
        Authorization: `Bearer ${cookies.accessToken}`,
        "X-Not-Using-Xquare-Auth": true,
      },
    })
      .then((res) => {
        const data = Object.entries(res.data)
          .slice(0, 5)
          .map((v) => {
            return {
              id: v[0],
              num: v[1],
            };
          });
        setStatistics(data);
        setSum(
          data.map((item) => item.num).reduce((acc, curr) => acc + curr, 0)
        );
        setAVG(res.data.average);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (cookies.accessToken && cookies.refreshToken) {
      GetReview();
    }
  }, [cookies, GetReview]); // [] 안에 상수가 수정되면 실행되게 수정함

  return (
    <>
      <_.ScoreBox>
        <_.ScoreMeanBox>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="65"
            height="65"
            viewBox="0 0 65 65"
            fill="none"
          >
            <path
              d="M31.673 45.647C32.1814 45.3401 32.8181 45.3401 33.3265 45.647L44.0854 52.1406C45.2971 52.8719 46.7918 51.7856 46.4703 50.4073L43.6152 38.1685C43.4802 37.5901 43.6768 36.9846 44.1257 36.5957L53.6335 28.359C54.7033 27.4323 54.1314 25.6751 52.7211 25.5554L40.2051 24.4936C39.6138 24.4434 39.0988 24.0701 38.8673 23.5237L33.9729 11.9758C33.4216 10.6749 31.5779 10.6749 31.0266 11.9758L26.1323 23.5237C25.9007 24.0701 25.3857 24.4434 24.7944 24.4936L12.2784 25.5554C10.8681 25.6751 10.2962 27.4323 11.366 28.359L20.8738 36.5957C21.3227 36.9846 21.5193 37.5901 21.3844 38.1685L18.5292 50.4073C18.2077 51.7856 19.7024 52.8719 20.9142 52.1406L31.673 45.647Z"
              fill="#FF7A1B"
            />
          </svg>
          <_.ScoreMean>{avg}</_.ScoreMean>
        </_.ScoreMeanBox>
        <_.Container>
          {statisticsData.map(
            (
              e,
              i // 파일을 나누었기에 sum을 보내주어야한다.
            ) => (
              <Score key={i} num={e.num} index={i} sum={sum} />
            )
          )}
        </_.Container>
      </_.ScoreBox>
    </>
  );
}

export default MealGrade;
