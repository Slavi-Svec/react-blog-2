import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navigation/Navigation.jsx'
import AllPosts from './Components/AllPosts/AllPosts.jsx'
import OnePost from './Components/OnePost/OnePost.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Route component={AllPosts} path="/" exact />
        <Route component={OnePost} path="/:slug" />
      </div>
    </BrowserRouter>
  )
}
export default App
