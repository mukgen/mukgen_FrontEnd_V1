import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/index";
import Login from "./pages/Login/index";
import MainLayout from "./MainLayout";
import ModalMain from "./components/Modal/ModalMain";

function App() {
  return (
    // BrowserRouter는 보통 index에서 사용해서 그쪽으로 뺌
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/reivew" element={<ModalMain />} />
      </Route>
    </Routes>
  );
}
export default App;
