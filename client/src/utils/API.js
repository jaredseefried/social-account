import axios from 'axios'

export default {
  getPost: () => { return axios.get('/api/posting') },

  postPosting: (data) => { return axios.post('/api/posting', data) },

  getContacts: () => { return axios.get("/api/contacts") },

  contactForm: (data) => { return axios.post("/api/contacts", data) },

  getImage: () => { return axios.get("/api/images") },

  uploadImage: (data) => { return axios.post('/api/images', data) },

  getCloudinary: () => { return axios.get('/api/cloudinary') },

  sendToCloudinary: (formData) => { return axios.post('/api/cloudinary', formData) },

  signupForm: (data) => { return axios.post('/api/signup', data) },

  getSignupDB: () => { return axios.get('/api/signup') }
}