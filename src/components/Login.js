import React from 'react'
import {GoogleLogin} from 'react-google-login'
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const history = useHistory();
    const onSuccess= (res)=> {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj)
        history.push("/dashboard")
    }
        const onFailure = (res) => {
        console.log("LOGIN FAILED! res : ", res)
      }
      const clientId = "266472049487-7vsuprhinvbqa2iubr5i3164tckkt3er.apps.googleusercontent.com"
     
  return (
    <div id="signInButtton">
    <GoogleLogin
    clientId={clientId}
    buttonText="Login"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}
    render={renderProps => (
      <Link onClick={renderProps.onClick} 
      style={customStyle.btn}
      >      
        {/* <div style={customStyle.google} >       */}
        {/* <FcGoogle style={{fontSize:"1.5em", "marginRight":"0.5rem"}}/> */}
        {/* </div> */}
       <div style={customStyle.text}>Login with Google</div>
      {/* <div style={customStyle.text}>Login</div> */}
      </Link>
     
    )}
    />
    </div>
  )
}

const customStyle={
    btn:{
        color: "#fff",
        backgroundColor: "#6163ff",
        fontSize:16,
        "fontFamily": "Inter, sans-serif",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "transparent",
        borderRadius: "2px",
        cursor:"pointer",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        "&:hover":{
            backgroundColor:"6163ff",
        },
        padding:"5px 20px",

        },
    // google:{
    //     height:"100%",
    //     width:"20%",
    //     display:"flex",
    //     justifyContent:"center",
    //     alignItems:"center",
    //     backgroundColor:"#fff"
    // },
    // text:{
    //     padding:"5px 20px",
    // }
}

export default Login