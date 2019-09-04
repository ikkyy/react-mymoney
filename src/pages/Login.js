import React, { useEffect, useState } from 'react'
import { usePost } from '../utils/rest'
import { Redirect } from 'react-router-dom'

const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBofFkUAQEgK4CsS1TA_LvAZbOcnNJLmtg'

const Login = () => {
    const [postData, signin] = usePost(url)
    const [logado, setLogado] = useState(false)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    useEffect(() => {
        if (Object.keys(postData.data).length > 0) {
            localStorage.setItem('token', postData.data.idToken)
            window.location.reload()
        }
    }, [postData])
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setLogado(true)
        }
    })
    const login = async () => {
        await signin({
            email,
            password: senha,
            returnSecureToken: true
        })
    }

    const onChangeEmail = evt => {
        setEmail(evt.target.value)
    }
    const onChangeSenha = evt => {
        setSenha(evt.target.value)
    }

    if (logado) {
        return <Redirect to='/' />
    }

    return (
        <div className='container'>
            <h1>Login</h1>
            {
                postData.error && postData.error.length > 0 &&
                <p>Email e/ou senha inválidos.</p>
            }
            <pre>{JSON.stringify(postData)}</pre>
            <input type='text' value={email} placeholder='Seu email' onChange={onChangeEmail} />
            <input type='password' value={senha} placeholder='Sua senha' onChange={onChangeSenha} />
            <button onClick={login}>Login</button>
        </div>
    )
}

export default Login