import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { closeSendMessage } from "../features/mailSlice";
import firebase from "firebase"
import {db} from "../firebase"

function SendMail() {
  const { register, handleSubmit, errors } = useForm();
  const dispatch= useDispatch()
  const onSubmit = (formData) => {
    db.collection('emails').add({
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    dispatch(closeSendMessage())
  }

  return (
    <SendMailContainer>
      <SendMailHeader>
        <h3>New Message</h3>
        <SendMessageClose onClick={()=>dispatch(closeSendMessage())} />
      </SendMailHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          ref={register({ required: true })}
        />
        {errors.to && (<SendMailError>To is Required</SendMailError>)}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          ref={register({ required: true })}
        />
        {errors.subject && (<SendMailError>Subject is Required</SendMailError>)}

        <SendMailMessage
          name="message"
          placeholder="Message..."
          type="text"
          ref={register({ required: true })}
        />
        {errors.message &&( <SendMailError>Message is Required</SendMailError>)}

        <SendMailOptions>
          <SendMailButton variant="contained" color="primary" type="submit">
            Send
          </SendMailButton>
        </SendMailOptions>
      </form>
    </SendMailContainer>
  );
}

export default SendMail;
const SendMailContainer = styled.div`
  position: absolute;
  bottom: 0px;
  right: 50px;
  background-color: #404040;
  width: 40%;
  height: 40%;
  max-width: 500px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid whitesmoke;
  box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);

  > form {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  > form > input {
    height: 30px;
    padding: 10px;
    border: none;
    border-bottom: 1px solid whitesmoke;
    outline: none;
  }
`;
const SendMailHeader = styled.div`
  padding: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
  > h3 {
    color: whitesmoke;
    font-size: 13px;
  }
`;
const SendMessageClose = styled(Close)`
  cursor: pointer;
`;
const SendMailOptions = styled.div``;

const SendMailButton = styled(Button)`
  background-color: #3079ed !important;
  text-transform: capitalize !important;
  margin: 15px !important;
`;
const SendMailMessage = styled.input`
  flex: 1;
`;

const SendMailError = styled.p`
    background-color: white;
    color: red;
    text-align: right;
    padding: 2px;
`;