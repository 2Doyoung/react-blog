import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App(props) {
    return (
      <BrowserRouter>
          <MainTitleText>LEE's React Blog</MainTitleText>
          <Routes>
              <Route index element={<MainPage></MainPage>}></Route>
              <Route path="post-write" element={<PostWritePage></PostWritePage>}></Route>
              <Route path="post/:postId" element={<PostViewPage></PostViewPage>}></Route>
          </Routes>
      </BrowserRouter>
    )
}

export default App;