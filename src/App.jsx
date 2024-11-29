import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Login from "./page/Login";
import Home from "./page/Home";

export default function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Main />} path="/main" />
      <Route element={<Login />} path="/login" />
    </Routes>
  )
}