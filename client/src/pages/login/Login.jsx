import React, { useContext } from 'react'
import "./login.scss"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'

const Login = () => {
  const {login}=useContext(AuthContext)

  const handleLogin=()=>{
    login();
  }
  return (
    <div className='login'>
      <div className='card'>
        <div className='left'>
            <h1>Sociopedia.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi velit distinctio voluptates, adipisci nihil provident nostrum ipsum eum ea harum officiis minima atque quaerat soluta. Aliquid consequatur nesciunt pariatur.</p>
            <span>Don't have an account?</span>
            <Link to="/register">
                <button>Register</button>
            </Link>
        </div>
        <div className='right'>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder='Username'/>
                <input type="text" placeholder='Password'/>
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
