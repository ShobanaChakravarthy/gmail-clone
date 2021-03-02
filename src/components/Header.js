import { Avatar, IconButton } from '@material-ui/core'
import { Menu, Search, ArrowDropDown, Apps, Notifications } from '@material-ui/icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {logout, selectUser} from "../features/userSlice"
import {auth} from "../firebase"

function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const signOut = () => {
        auth.signOut().then(()=>{
            dispatch(logout())
        })
    }
    return (
        <HeaderContainer>
           <HeaderLeft>
                <IconButton>
                    <Menu/>
                </IconButton>
                <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt=""/>
           </HeaderLeft>
           <HeaderMiddle>
                <Search/>
                <input type="text" placeholder="Search mail"/>
                <HeaderArrow/>   
           </HeaderMiddle>
           <HeaderRight>
                <IconButton>
                    <Apps/>
                </IconButton>
                <IconButton>
                    <Notifications/>
                </IconButton>
                <HeaderAvatar
                 src={user?.photoUrl}
                 alt={user?.displayName}
                 onClick={signOut}
                />
           </HeaderRight>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid whitesmoke;
`
const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    >img {
        object-fit: contain;
        height: 80px;
        margin-left: 5px;
    }
`
const HeaderMiddle = styled.div`
    display: flex;
    align-items: center;
    flex: 0.7;
    background-color: whitesmoke;
    padding: 10px;
    border-radius: 5px;

    > input{
        border: none;
        width:100%;
        padding: 10px;
        outline-width: 0;
        font-size: medium;
        background-color: transparent;
    }
`
const HeaderArrow = styled(ArrowDropDown)`
   color: gray;
`
const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    padding-right: 20px;
`
const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    :hover{
        opacity: 0.8;
    }
`