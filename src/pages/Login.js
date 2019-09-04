import React, { useEffect, useState } from 'react'
import { usePost } from '../utils/rest'
import { Redirect } from 'react-router-dom'

const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBofFkUAQEgK4CsS1TA_LvAZbOcnNJLmtg'

const Login = () => {
    const [postData, signin] = usePost(url)
    const [logado, setLogado] = useState(false)
    useEffect(() => {
        if (Object.keys(postData.data).length > 0) {
            localStorage.setItem('token', postData.data.idToken)
            window.location.reload()
        }
    }, [postData])
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            setLogado(true)
        }
    })
    const login = async () => {
        await signin({
            email: "msndoikky@hotmail.com",
            password: "123456",
            returnSecureToken: true
        })
    }

    if (logado) {
        return <Redirect to='/' />
    }

    return (
        <div className='container'>
            <h1>Login</h1>
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login