import React from "react";
import { BrowserRouter, Route } from "react-router-dom"
import AllPosts from './Components/AllPosts/AllPosts.js'
import OnePost from './Components/OnePost/OnePost.js'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={AllPosts} path="/" exact />
        <Route component={OnePost} path="/:slug" />
      </div>
    </BrowserRouter>
  );
}
export default App;