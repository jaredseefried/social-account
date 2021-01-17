import React, { useState, useEffect, useRef } from 'react'
import API from '../utils/API';
import Cards from './Cards'
// import axios from 'axios'


function PostStatus() {

  const fileInput = useRef()

  const [postForm, setPostForm] = useState({
    title: "",
    description: "",
    img: "",
    link: ""
  })

  const [postings, setPostings] = useState([])

  const [images, setImages] = useState(null)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadPosts()
    loadImages()
    // loadCloudinary()
  }, [])

  function onUpload(e) {
    e.preventDefault()
    let file = fileInput.current.files[0];
    let fileName = fileInput.current.files[0].name
    let imgType = fileInput.current.files[0].type
    console.log(file);
    console.log(fileName);
    console.log(imgType);

  }

  function onSubmit(e) {
    e.preventDefault()
    const file = fileInput.current.files[0]
    setImages({ ...file })

    const formData = new FormData()
    formData.append("fileinfo", file)
    console.log(formData);
    API.sendToCloudinary(formData)
      .then((response) => {
        // API.getImage()
        const data = response.data
        console.log(data)
        console.log(data.payload[0].secure_url);
        setPostForm({
          ...postForm,
          img: data.payload[0].secure_url
        })
      })
    // .then(()=>{

    // })
  };

  function loadImages() {
    API.getImage()
      .then((response) => {
        const data = response.data
        console.log(data);
      })
  }

  function loadCloudinary() {
    API.getCloudinary()
      .then((response) => {
        const data = response.data
        console.log(data);
      })
  }

  function loadPosts() {
    API.getPost()
      .then((response) => {
        const data = response.data
        console.log(data);
        data.reverse()
        setPostings(data)
      })
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setPostForm({ ...postForm, [name]: value })
  };

  function handleFormSubmit(e) {
    e.preventDefault()
    API.postPosting({
      title: postForm.title,
      description: postForm.description,
      img: postForm.img,
      link: postForm.link
    })
      .then(() => loadPosts())
      .then(() => setPostForm({
        title: "",
        description: "",
        img: "",
        link: ""
      }))
      // .then(()=>{
      //   fileInput=(null)
      // })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div className="post-container col-12">
      
      <div className="row">
        <h1 className="post-title">Post Status!</h1>
      </div>
      <div className="row">
        <div className="form col-12">
          <div className="col-12">
            <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
            <input type="text" className="form-control" name="title" value={postForm.title} onChange={handleInputChange} placeholder="Title" />
          </div>
          <div className="col-12">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
            <textarea className="form-control" name="description" value={postForm.description} id="exampleFormControlTextarea1" onChange={handleInputChange} rows="3"></textarea>
            <input type="text" className="form-control" name="link" value={postForm.link} onChange={handleInputChange} placeholder="Link" />
          </div>
          {/* <div className="col-12">
            <label htmlFor="exampleFormControlInput1" className="form-label">Image Link</label>
            <input type="text" className="form-control" name="img" value={postForm.img}  onChange={handleInputChange} placeholder="Image Link" />
          </div> */}

          <form className="upload-file" encType="multipart/form-data" method="post" name="fileinfo" onSubmit={onSubmit}>
            <label>Upload file</label>
            <input type="file" name="file" onChange={onUpload} ref={fileInput} />
            <button type="submit">Send</button>
          </form>

          <div className="col-12">
            <input className="btn btn-primary" type="submit" onClick={handleFormSubmit} value="Submit"></input>
          </div>


        </div>
      </div>
      <div className="postings">
        <div className="row">
          {postings.map((posting) => (
            <Cards
              key={posting._id}
              {...posting}
              title={posting.title}
              description={posting.description}
              image={posting.image}
              link={posting.link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostStatus