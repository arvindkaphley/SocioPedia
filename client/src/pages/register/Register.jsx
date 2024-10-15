import React from 'react'
import "./register.scss"
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className='register'>
    <div className='card'>
      <div className='right'>
          <h1>Register</h1>
          <form>
              <input type="text" placeholder='Username'/>
              <input type="email" placeholder='Email'/>
              <input type="text" placeholder='Password'/>
              <input type="text" placeholder='Name'/>
              <button>Register</button>
          </form>
      </div>
      <div className='left'>
          <h1>Sociopedia.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi velit distinctio voluptates, adipisci nihil provident nostrum ipsum eum ea harum officiis minima atque quaerat soluta. Aliquid consequatur nesciunt pariatur.</p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
      </div>
    </div>
  </div>
  )
}

export default Register
