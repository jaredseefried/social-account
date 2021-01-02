import React, { useState, useEffect } from 'react'
import Cards from './Cards'
import API from '../utils/API'

function Feed() {

  const [postings, setPostings] = useState([])

  useEffect(() => {
    loadPosts()
  }, [])

  function loadPosts() {
    API.getPost()
      .then((response) => {
        const data = response.data
        console.log(data);
        data.reverse()
        setPostings(data)
      })
  }

  return (
    <div className="feed-container container-fluid col-12">
      <div className="row">
        {postings.map((posting) => (
          <Cards
            key={posting._id}
            {...posting}
            title={posting.title}
            description={posting.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Feed