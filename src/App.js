import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/index";
import Login from "./pages/Login/index";
import Navbar from "./components/Navbar/index";

function App() {
  return (  // BrowserRouter는 보통 index에서 사용해서 그쪽으로 뺌
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </>
  );
}
export default App;
