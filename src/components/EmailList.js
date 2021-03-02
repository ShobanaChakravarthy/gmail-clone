import { Checkbox, IconButton } from '@material-ui/core'
import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import EmailRow from './EmailRow'
import Section from './Section'
import {db} from "../firebase"

function EmailList() {
    const [emails,setEmails] = useState([]);

    useEffect(()=>{
        db.collection('emails').orderBy('timestamp','desc')
          .onSnapshot(snapshot=>setEmails(snapshot.docs.map(doc=>({
              id: doc.id,
              data: doc.data()
          }))))
    },[])

    return (
        <EmailListContainer>
            <EmailSettings>
                <EmailSettingsLeft>
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDown/>
                    </IconButton>
                    <IconButton>
                        <Redo/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </EmailSettingsLeft>
                <EmailSettingsRight>
                    <IconButton>
                        <ChevronLeft/>
                    </IconButton>
                    <IconButton>
                        <ChevronRight/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHide/>
                    </IconButton>
                    <IconButton>
                        <Settings/>
                    </IconButton>
                </EmailSettingsRight>
            </EmailSettings>
            <EmailListSection>
                <Section Icon={Inbox} title="Primary" color="red" selected/>
                <Section Icon={People} title="Social" color="#1A73E8" />
                <Section Icon={LocalOffer} title="Promotions" color="green" />
            </EmailListSection>
            <EmailListList>
                {emails.map(({id,data:{to,subject,message,timestamp}})=> (
                    <EmailRow 
                        id={id}
                        key={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={new Date(timestamp?.seconds*1000).toUTCString()}
                    />
                ))}
                <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="this is a test" time="10pm"/>
                <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="this is a test" time="10pm"/>
                <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="this is a test" time="10pm"/>
                <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="this is a test" time="10pm"/>
                <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="this is a test" time="10pm"/>
                <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="this is a test" time="10pm"/>
                <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="this is a test" time="10pm"/>
                <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="this is a test" time="10pm"/>
                <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="this is a test" time="10pm"/>
                <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="this is a test" time="10pm"/>
                <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="this is a test" time="10pm"/>
                <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="this is a test" time="10pm"/>
                <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="this is a test" time="10pm"/>
                <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="this is a test" time="10pm"/>
                <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="this is a test" time="10pm"/>
                <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="this is a test" time="10pm"/>
                <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="this is a test" time="10pm"/>
                <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="this is a test" time="10pm"/>
                <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="this is a test" time="10pm"/>
                <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="this is a test" time="10pm"/>
                <EmailRow title="Twitch" subject="Hey Fellow Streamer" description="this is a test" time="10pm"/>
            </EmailListList>
        </EmailListContainer>
    )
}

export default EmailList
const EmailListContainer = styled.div`
    flex: 1;
    overflow: scroll;    
`
const EmailSettings = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid whitesmoke;
    background-color: white;
    z-index: 999;
    padding-right: 10px;
`
const EmailSettingsLeft = styled.div``
const EmailSettingsRight = styled.div``
const EmailListSection = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    border-bottom: 1px solid whitesmoke;
    background-color: white;
    z-index: 999;
`
const EmailListList = styled.div`
    padding-bottom:20%;
`
