import axios from 'axios'
import React from 'react'
import GoogleButton from 'react-google-button'

const Google = () => {
    const fetchAuthUser = async () => {
        const res = await axios
        .get('http://localhost:4004/auth/user',{withCredentials: true})
        .catch((err) => {
            console.log('Not properly authenticated')
        })
        if (res && res.data) {
            console.log('User:', res.data)
        }
        }

    const redierctToGoogle = async () => {
        let timer = null
        const googleLoginURL = 'http://localhost:4004/auth/google'
        const newWindow = window.open(
            googleLoginURL,
            '_blank',
            'width=500, height=600'
        )
        if(newWindow) {
            timer = setInterval(() => {
                if (newWindow.closed) {
                    console.log('yeah we are log in')
                    fetchAuthUser()
                    if (timer) clearInterval(timer)
                }
            },500)
        }
    }

  return (
    <div className='google'>
        <GoogleButton onClick={redierctToGoogle}/>
    </div>
  )
}

export default Google