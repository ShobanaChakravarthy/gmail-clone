import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import {auth, provider} from "../firebase"
import {login} from "../features/userSlice"

function Login() {
    const dispatch=useDispatch()
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(({user})=>{
            dispatch(login({
                displayName: user.displayName,
                photoUrl: user.photoURL,
                email: user.email
            }))
        })
        .catch((error)=>alert(error.message))
    }
    return (
        <LoginContainer>
            <LoginInner>
                <img src="https://1000logos.net/wp-content/uploads/2018/05/Gmail-logo.png" alt=""/>
                <Button variant="contained" color="primary" onClick={signIn}>Sign In</Button>
            </LoginInner>
        </LoginContainer>
    )
}

export default Login
const LoginContainer = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
`
const LoginInner = styled.div`
    display: flex;
    flex-direction: column;
    >img{
        object-fit: contain;
        height: 200px;
    }
`