import React, { useCallback, useEffect, useState } from "react";
import MealGraphDate from "./MealGraphDate";
import BarGraph from "./BarGraph";
import LineGraph from "./LineGraph";
import CircleGraph from "./CircleGraph";
import Texts from "./Texts"; // 파일을 분리하는 편이 깔끔해보일 것 같아 이렇게 함
import { GraphBox } from "./style"; // style 파일에 모으고 필요한 것만 쓰면 될 것 같아 이렇게 만듦
import axios from "axios";
import { useCookies } from "react-cookie";

function MealGraph() {
  const [cookies, ,] = useCookies(["accessToken", "refreshToken"]); // [] 안에 써있는 이름의 cookie가 수정되면 cookie가 자동 렌더링되도록 수정함
  const [statisticsData, setStatistics] = useState([]);

  const GetMealSuggestion = useCallback(() => {
    axios({
      method: "GET",
      url: "https://stag-server.xquare.app/mukgen/meal-suggestion/statistics",
      headers: {
        Authorization: `Bearer ${cookies.accessToken}`,
        "X-Not-Using-Xquare-Auth": true,
      },
    })
      .then((res) => {
        setStatistics(
          res.data.mealStatusResponseList.map((v) => {
            return {
              date: `${v.month}/${v.day}`,
              count: v.totalCount,
            };
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cookies]);

  useEffect(() => {
    if (cookies.accessToken && cookies.refreshToken) {
      GetMealSuggestion();
    }
  }, [cookies, GetMealSuggestion]); // [] 안에 상수가 수정되면 실행되게 수정함

  return (
    <>
      <GraphBox>
        <svg viewBox="0 0 500 260" width="500" height="260">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#FE984D", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#FE984D", stopOpacity: 0.2 }}
              />
            </linearGradient>
          </defs>
          <BarGraph data={statisticsData} color="url(#grad)" />
          <LineGraph data ={statisticsData} />
          <CircleGraph data={statisticsData} />
          <Texts data={statisticsData} />
        </svg>
      </GraphBox>
      <MealGraphDate data={statisticsData} />
    </>
  );
}

export default MealGraph;
