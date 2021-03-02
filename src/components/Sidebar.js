import { Button, IconButton } from '@material-ui/core'
import { AccessTime, Add, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Note, Person, Phone, Star } from '@material-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { openSendMessage } from '../features/mailSlice'
import SidebarOption from './SidebarOption'

function Sidebar() {
    const dispatch = useDispatch()
    return (
        <SidebarContainer>
            <SidebarButton startIcon={<Add fontSize="large"/>} onClick={()=> dispatch(openSendMessage())}>Compose</SidebarButton>
            <SidebarOption
                Icon = {Inbox}
                title="Inbox"
                number={34}
                selected={true}
            />
            <SidebarOption
                Icon = {Star}
                title="Starred"
                number={34}
            />
            <SidebarOption
                Icon = {AccessTime}
                title="Snoozed"
                number={34}
            />
            <SidebarOption
                Icon = {LabelImportant}
                title="Important"
                number={34}
            />
            <SidebarOption
                Icon = {NearMe}
                title="Sent"
                number={34}
            />
            <SidebarOption
                Icon = {Note}
                title="Drafts"
                number={34}
            />
            <SidebarOption
                Icon = {ExpandMore}
                title="More"
                number={34}
            />
            <SidebarFooter>
                <IconButton>
                    <Person/>
                </IconButton>
                <IconButton>
                    <Duo/>
                </IconButton>
                <IconButton>
                    <Phone/>
                </IconButton>
            </SidebarFooter>
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    flex: 0.3;
    max-width: 300px;
    padding-right: 20px;
`
const SidebarButton = styled(Button)`
    margin-top: 15px !important;
    margin-left: 10px !important;
    margin-bottom: 15px !important;
    text-transform: capitalize !important;
    color: gray;
    padding: 15px !important;
    border-radius: 30px !important;
    box-shadow: 0px 2px 5px -2px rgba(0,0,0,0.75)
`
const SidebarFooter=styled.div`
    display: flex;
    justify-content: center;
`