import React from 'react'
import PostStatus from '../components/Post'
// import Feed from '../components/Feed'
import LoginBtn from '../components/LoginBtn'

function Home() {
  return (
    <div className="home-container">
      <h1>Hello World!</h1>
      {/* <LoginBtn /> */}
      <PostStatus />
      {/* <Feed /> */}
    </div>

  )
}

export default Home