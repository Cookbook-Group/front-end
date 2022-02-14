import React,{ useState } from 'react'
import '../Login/Login.css'


const Signup = ({addUsers}) => {
    const signup = {
		username: '',
		email: '',
		password: '',
		verifyPassword: ''
	}
	const [signupForm, setSignupForm] = useState(signup)
    const [message,setMessage] = useState(`Join Social-Meal-Dia!`)

	const handleChange = e => {
		setSignupForm({
			...signupForm,[e.target.id]: e.target.value
		})
	}
	const handleSubmitSignUp = async (e) =>{
		e.preventDefault()
        if (signupForm.password === signupForm.verifyPassword) { 
            setMessage(`Welcome ${signupForm.username}  `)
	    }else{
            setMessage(`Passwords don't match!`)
	    }
        setSignupForm(signup)
        let res = await fetch (`${process.env.REACT_APP_backendURI}users/signup`, {
            method: 'POST',
            body: JSON.stringify({
                username: signupForm.username,
                email: signupForm.email,
                password: signupForm.password,
                verifyPassword: signupForm.verifyPassword
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
        let userData = await res.json()
            addUsers(userData)
	}

  return (
    <div className="signup">
				<form onSubmit={handleSubmitSignUp}>
					<label className='topSignup' htmlFor="chk" aria-hidden="true">Sign up</label>
                    <p className='spaceSignup'>{message}</p>
					<input type="text" id="username" name="txt" placeholder="Username" required="" value={signupForm.username} onChange={handleChange}/>
					<input type="email" id="email" name="email" placeholder="Email" required="" value={signupForm.email} onChange={handleChange} />

					<input type="password" id="password" name="pswd" placeholder="Password" required="" value={signupForm.password} onChange={handleChange}/>

          <input type="password" id="verifyPassword" name="pswd" placeholder="Verify Password" required="" value={signupForm.verifyPassword} onChange={handleChange} />
					<button className='login-button'>Sign up</button>
					
				</form>
			</div>
  )
}

export default Signup