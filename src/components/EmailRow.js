import { Checkbox, IconButton } from '@material-ui/core'
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { selectMail } from "../features/mailSlice"

function EmailRow({id,title,subject,description,time}) {
    const dispatch=useDispatch()
    const history = useHistory()
    const openMail = () => {
        dispatch(selectMail({
            id,title,subject,description,time
        }))
        history.push("/mail")
    }
    return (
        <EmailRowContainer onClick={openMail}>
            <EmailRowOptions>
                <Checkbox/>
                <IconButton>
                    <StarBorderOutlined/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined/>
                </IconButton>
            </EmailRowOptions>
            <EmailRowTitle>
                {title}
            </EmailRowTitle>
            <EmailRowMessage>
                <h4>{subject}{""}<EmailDescription> - {description}</EmailDescription></h4>
            </EmailRowMessage>
            <EmailRowTime>
                {time}
            </EmailRowTime>
        </EmailRowContainer>
    )
}

export default EmailRow
const EmailRowContainer = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid whitesmoke;
    cursor: pointer;
    z-index: 999;
    :hover{
        border-top: 1px solid whitesmoke;
        box-shadow: 0px 4px 4px -2px rgba(0,0,0,0.24)
    }
`
const EmailRowOptions = styled.div`
    display: flex;
`
const EmailRowTitle = styled.h3`
    font-size: 13px;
    flex: 0.3;
`
const EmailRowMessage = styled.div`
    display: flex;
    flex: 0.8;
    align-items: center;
    font-size: 13px;
    >h4{
        width: 400px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: 5px;
        padding-right: 5px;
    }
`
const EmailDescription = styled.span`
    font-weight: 400;
    color: gray;
`
const EmailRowTime = styled.div`
    padding-right: 15px;
    font-size: 9px;
    font-weight: bold;
`
