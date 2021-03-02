import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Mail from './components/Mail';
import EmailList from './components/EmailList';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import SendMail from './components/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/Login';
import { auth } from './firebase';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch=useDispatch()
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        dispatch(login({
          displayName: user.displayName,
          photoUrl: user.photoURL,
          email: user.email
      }))
      }
      else{
        dispatch(logout())
      }
    })
  },[dispatch])
  return (
    <Router>
      {!user ? (
          <Login/>
      ):(
          <AppContainer>
          <Header/>
          <AppBody>
              <Sidebar/>
              <Switch>
                <Route path="/mail">
                  <Mail/>
                </Route>
                <Route path= "/">
                  <EmailList/>
                </Route>
              </Switch>
          </AppBody>
          {sendMessageIsOpen && <SendMail/>}
        </AppContainer>
      )
     }  
    </Router>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
`
const AppBody = styled.div`
  display: flex;
  height: 100vh;
`