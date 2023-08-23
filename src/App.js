import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/index";
import Login from "./pages/Login/index";
import Navbar from "./components/Navbar/index";
import ModalMain from "./components/Modal/ModalMain";

function App() {
  return (
    // BrowserRouter는 보통 index에서 사용해서 그쪽으로 뺌
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/reivew" element={<ModalMain />} />
      </Routes>
    </>
  );
}
export default App;
