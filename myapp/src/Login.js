import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Steadfast from './Assest/Steadfast.png';

function Login() {
  const Navigate = useNavigate();
  const [input, setInput] = useState({
    email:"",
    password:"",
  });
  const { email, password } = input;

  const submitHandle = () =>{
    if(email !== "" && password !== "")
   { setInput({
  email:"",
password:""})
console.log(input)
Navigate("/Homepg")}
else{
  toast.error("invalid password")
}
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100vh",
          alignItems: "center",
          
           backgroundImage: `URL(${Steadfast})`,
           backgroundSize:"cover"
           
        }}
      >
        <Box
          sx={{
            dispaly: "flex",
            flexDirection: "column",
            width: "30%",
            backgroundColor: "none",
            alignItems: "center",
            marginLeft:"50px",
            textAlign: "center",
            padding: "10px 15px",
            borderRadius: "10px",
           
          }}
        >
          <Box>
            <Toaster />
            <Typography sx={{color:"#fff"}}>login</Typography>
          </Box>
          <Box
            sx={{
              dispaly: "flex",
              flexDirection: "column",
              gap:3,
              padding: "20px",
              
            }}
          >
            <Box >
            <TextField sx={{Color:"#fff",}}
              label="Email"
              type="text"
              value={email}
              onChange={(e) => {
                setInput({ ...input, email: e.target.value });
              }}
            />
            </Box>
            <Box >
            <TextField  sx={{Color:"#fff",overflow:"hidden",padding:"20px"}}
              label="Password"
              type="Password"
              value={password}
              onChange={(e) => {
                setInput({ ...input, password: e.target.value });
              }}
            />
            </Box>
          </Box>
          <Box>
            <Button
              onClick={submitHandle}
              style={{ backgroundColor: "violet" }}
            >
              Submit
            </Button>
            <Box sx={{padding:"20px",color:"#fff"}}>
            Don't have an account?
            </Box>
            <Button
              style={{ backgroundColor: "violet" }}
              onClick={() => Navigate("/signin")}
            >
              Signin
            </Button>
           
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Login;
