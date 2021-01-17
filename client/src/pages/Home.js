import React from 'react'
// import { BrowserRouter as Router, Route } from "react-router-dom";
import PostStatus from '../components/Post'
// import Feed from '../components/Feed'
import SignUpLogInBtn from '../components/SignUpLogInBtn'

function Home() {
  return (
    <div className="home-container">
      <h1>Hello World!</h1>
      <SignUpLogInBtn />
      <PostStatus />
    </div>

  )
}

export default Home