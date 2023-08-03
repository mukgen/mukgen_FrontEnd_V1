import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom"; // 애는 보통 이곳에서 사용하기에 App에서 빼서 가져옴
import { ReactQueryDevtools } from "react-query/devtools";
import { Toaster } from "react-hot-toast";
import "./fonts/fonts.css"; // 라이브러리와 구분을 줘야할 것 같아 이렇게 함
import "./index.css";
import App from "./App";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Toaster
          position="top-center"
          reverseOrder={true}
          gutter={8}
          toastOptions={{
            className: "",
            duration: 1000,
            style: {
              background: "#FFF",
              color: "#000",
            },
          }}
        />
        <App />
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
