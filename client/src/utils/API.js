import axios from 'axios'

export default {
  getPost: function () {
    return axios.get('/api/posting')
  },

  postPosting: function (data){
    return axios.post('/api/posting', data)
  },
  
  getContacts: function () {
    return axios.get("/api/contacts")
  },

  contactForm: function (data) {
    return axios.post("/api/contacts", data)
  },

  getImage: function(){
    return axios.get("/api/images")
  },

  uploadImage: function(data){
    return axios.post('/api/images', data)
  },

  getCloudinary: function(){
    return axios.get('/api/cloudinary')
  },

  sendToCloudinary: function(formData){
    return axios.post('/api/cloudinary', formData)
  }
}