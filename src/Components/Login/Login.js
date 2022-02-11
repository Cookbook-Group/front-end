import React, { useEffect } from 'react';
import './Login.css'
import { useState } from 'react';
import Google from '../Google';
import Signup from '../Signup/Signup';


const Login = ({setUser}) => {
  const [users, setUsers] = useState([])
  const [message,setMessage] = useState('')
  
  let getUsers = async () => {
	  let data = await fetch('http://localhost:4004/users')
	  let allUsers = await data.json()
	  setUsers(allUsers)
  }

  useEffect(() => {
	  getUsers()
  },[])

  let addUsers = (user) => {
	  setUsers([...users,user])
  }


  const initialState = {usernameToLogIn: '',passwordToLogIn:''}
  const [formState, setFormState] =useState(initialState)
  const handleChange = e =>{
	  setFormState({
		  ...formState,
		  [e.target.id]: e.target.value
	  })
  }

  const handleSubmitLogIn = async (e) =>{
	e.preventDefault()
	// alert(`Welcome back ${formState.usernameToLogIn}! Enjoy the Recipies!`)
	if (formState.passwordToLogIn === users.password) {
		setMessage(`Welcome back ${formState.usernameToLogIn}! Enjoy the Recipies!`)
	} else {
		setMessage('Wrong Username or Password')
	}
	setFormState(initialState)
	let data = await fetch(`http://localhost:4004/users/login`,{
		method: 'POST',
		body: JSON.stringify({
			username: formState.usernameToLogIn,
			password: formState.passwordToLogIn
		}),
		headers: {
			'content-type': 'application/json'
		}
	})
	let userData = await data.json()
	setUser(userData)
}


  return (
    <div className='login-body'>

<div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

		<Signup addUsers={addUsers}/>

			<div className="login">
				<form onSubmit={handleSubmitLogIn}>
					<label htmlFor="chk" aria-hidden="true">Login</label>
					<p className='spaceLogin'>{message}</p>
					<Google />
					<h2 className='or'>OR</h2>
					<input type="username" id="usernameToLogIn" name="username" placeholder="User Name" required="" value={formState.usernameToLogIn} onChange={handleChange}/>

					<input type="password" id="passwordToLogIn" name="pswd" placeholder="Password" required="" value={formState.passwordToLogIn} onChange={handleChange}/>
					<button className='login-button'>Login</button>
				</form>
			</div>
	</div>


    </div>
    );
};

export default Login;
