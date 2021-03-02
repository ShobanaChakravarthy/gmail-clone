import { IconButton } from '@material-ui/core'
import { ArrowBack, CheckCircle, Delete, Email, Error, ExitToApp, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from '@material-ui/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { selectOpenMail } from '../features/mailSlice'

function Mail() {
    const history = useHistory()
    const selectedMail = useSelector(selectOpenMail)
    return (
        <MailContainer>
            <MailTools>
                <MailToolsLeft>
                    <IconButton onClick={()=>history.push("/")}>
                        <ArrowBack/>
                    </IconButton>
                    <IconButton>
                        <MoveToInbox/>
                    </IconButton>
                    <IconButton>
                        <Error/>
                    </IconButton>
                    <IconButton>
                        <Delete/>
                    </IconButton>
                    <IconButton>
                        <Email/>
                    </IconButton>
                    <IconButton>
                        <WatchLater/>
                    </IconButton>
                    <IconButton>
                        <CheckCircle/>
                    </IconButton>
                    <IconButton>
                        <LabelImportant/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </MailToolsLeft>
                <MailToolsRight>
                    <IconButton>
                        <UnfoldMore/>
                    </IconButton>
                    <IconButton>
                        <Print/>
                    </IconButton>
                    <IconButton>
                        <ExitToApp/>
                    </IconButton>
                </MailToolsRight>
            </MailTools>
           <MailBody>
               <MailBodyHeader>
                    <h2>{selectedMail.subject}</h2>
                    <MailLabelIcon/>
                    <p>{selectedMail.title}</p>
                    <MailTime>{selectedMail.time}</MailTime>
               </MailBodyHeader>
               <MailMessage>
                   {selectedMail.description}
               </MailMessage>
           </MailBody>
        </MailContainer>
    )
}

export default Mail
const MailContainer = styled.div`
    flex: 1;
    background-color: whitesmoke;

`
const MailTools = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
`
const MailToolsLeft = styled.div`
    display: flex;
`
const MailToolsRight = styled.div`
    display: flex;
`
const MailBody = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px;
    background-color: white;
    padding: 20px;
    height: 100vh;
    box-shadow: 0px 5px 7px 0px rgba(0,0,0,0.24)
`
const MailBodyHeader = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid whitesmoke;
    padding: 20px;
    position: relative;
    >h2{
        font-weight: 400;
        margin-right: 20px;
    }
`
const MailLabelIcon = styled(LabelImportant)`
    color: #e8ab02 !important
`
const MailMessage = styled.p`
    padding: 10px;
    margin-right: 20px;
    overflow-wrap: break-word
`
const MailTime = styled.p`
    position: absolute;
    top: 24px;
    right: 0;
    font-size: 12px;
    color: gray;
`
