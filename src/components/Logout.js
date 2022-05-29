import React from 'react'
import {GoogleLogout} from 'react-google-login'
import { Link } from "react-router-dom";

import { useHistory } from 'react-router-dom'
const clientId = "266472049487-7vsuprhinvbqa2iubr5i3164tckkt3er.apps.googleusercontent.com"
const Logout = () => {
    const history = useHistory();
    const onSuccess= (res)=> {
        console.log("Log Out Successfully")
history.push('/')
    }
     
     
  return (
    <div id="signOutButtton">
    <GoogleLogout
    clientId={clientId}
    buttonText="LogOut"
    onLogoutSuccess={onSuccess}
    render={renderProps => (
      <Link onClick={renderProps.onClick} 
      style={customStyle} to=""
      >Logout</Link>
    )}
    />
    </div>
  )
} 

const customStyle={
    color: "#fff",
    backgroundColor: "#6163ff",
    fontSize:16,
    "fontFamily": "Inter, sans-serif",
    padding:"5px 31px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "transparent",
    borderRadius: "2px",
    cursor:"pointer",
    "&:hover":{
        backgroundColor:"6163ff",
    }
}
export default Logout