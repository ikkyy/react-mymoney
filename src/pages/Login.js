import React, { useEffect } from 'react'
import { usePost } from '../utils/rest'

const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBofFkUAQEgK4CsS1TA_LvAZbOcnNJLmtg'

const Login = () => {
    const [postData, signin] = usePost(url)
    useEffect(() => {
        if (Object.keys(postData.data).length > 0) {
            localStorage.setItem('token', postData.data.idToken)
        }
    }, [postData])
    const login = async () => {
        await signin({
            email: "msndoikky@hotmail.com",
            password: "123456",
            returnSecureToken: true
        })
    }

    return (
        <div className='container'>
            <h1>Login</h1>
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login