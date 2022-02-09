import React from 'react';
import './Login.css'
import { useState } from 'react';


const Login = () => {
// sign up
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [verifyPassword, setVerifyPassword] = useState('')

//  login
  const initialState = {usernameToLogIn: '',passwordToLogIn:''}
  const [formState, setFormState] =useState(initialState)
  const handleChange = e =>{
	  setFormState({
		  ...formState,
		  [e.target.id]: e.target.value
	  })
  }

//   login
  const handleSubmitLogIn = e =>{
	e.preventDefault()
	alert(`Welcome back ${formState.usernameToLogIn}! Enjoy the Recipies!`)
	setFormState(initialState)
}

//  sign up
  const handleSubmitSignUp = e =>{
      e.preventDefault()
    //   if (verifyPassword.current.value !== password.current.value) {
    //     verifyPassword.current.setCustomValidity("Passwords don't match!")
	// 	alert("Passwords don't match!")
    //   }else{
		alert(`${username} Welcome to Social-Meal-Dia! Enjoy the Recipies`)
	//   }

  }

  return (
    <div className='login-body'>

<div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>


			<div className="signup">
				<form onSubmit={handleSubmitSignUp}>
					<label htmlFor="chk" aria-hidden="true">Sign up</label>

					<input type="text" id="username" name="txt" placeholder="User name" required="" value={username} onChange={e => setUsername(e.target.value)}/>
					<input type="email" id="email" name="email" placeholder="Email" required="" value={email} onChange={e=> setEmail(e.target.value)} />

					<input type="password" id="password" name="pswd" placeholder="Password" required="" value={password} onChange={e => setPassword(e.target.value)}/>

          <input type="password" id="verifyPassword" name="pswd" placeholder="Verify Password" required="" value={verifyPassword} onChange={e => setVerifyPassword(e.target.value)} />
					<button className='login-button'>Sign up</button>
				</form>
			</div>

			<div className="login">
				<form onSubmit={handleSubmitLogIn}>
					<label htmlFor="chk" aria-hidden="true">Login</label>

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
