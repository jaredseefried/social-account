import React, { useState, useEffect } from 'react'
import API from '../utils/API';

function SignUp() {

  const [signUpForm, setSignUpForm] = useState({
    email: "",
    retypeEmail: "",
    password: "",
    retypePassword: ""
  })

  useEffect(() => {
    loadDB()
  }, [])

  function loadDB() {
    API.getSignupDB()
      .then((response) => {
        const data = response.data
        console.log(data);
      })
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setSignUpForm({ ...signUpForm, [name]: value })
  };

  function handleFormSubmit(e) {
    e.preventDefault()
    API.signupForm({
      email: signUpForm.email,
      retypeEmail: signUpForm.retypeEmail,
      password: signUpForm.password,
      retypePassword: signUpForm.retypePassword
    })
      .then(() => loadDB())
      .then(() => setSignUpForm({
        email: "",
        retypeEmail: "",
        password: "",
        retypePassword: ""
      }))
      // .then(()=>{
      //   fileInput=(null)
      // })
      .catch((error) => {
        console.log(error);
      })
  }


  return (
    <div className="signup-container">
      <h1 className="signup-login-title">Sign Up or Log In</h1>

      <form method="post" className="form">
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">Email</span>
          <input type="text" className="form-control" placeholder="email" aria-label="email" aria-describedby="addon-wrapping" name="email" onChange={handleInputChange} value={signUpForm.email} />
        </div>
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">Re-type Email</span>
          <input type="text" className="form-control" placeholder="Retype Email" aria-label="retype-email" aria-describedby="addon-wrapping" name="retypeEmail" onChange={handleInputChange} value={signUpForm.retypeEmail} />
        </div>
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">Password</span>
          <input type="text" className="form-control" placeholder="Paassword" aria-label="password" aria-describedby="addon-wrapping" name="password" onChange={handleInputChange} value={signUpForm.password} />
        </div>
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">Re-type Password</span>
          <input type="text" className="form-control" placeholder="Retype Password" aria-label="retype-password" aria-describedby="addon-wrapping" name="retypePassword" onChange={handleInputChange} value={signUpForm.retypePassword} />
        </div>
        <div className="col-12">
          <input className="btn btn-primary" type="submit" onClick={handleFormSubmit} value="Submit"></input>
        </div>
      </form>


    </div>
  )
}
export default SignUp