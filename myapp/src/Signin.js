import React from 'react'
import TextField from "@mui/material/TextField";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';



function Signin() {
  const Navigate = useNavigate()
  return (
    <>
      <Box
        sx={{
         display:"flex",
         flexDirection:"row",
         width:"100%",
         height:"100vh",
         alignItems:"center",
          justifyContent:"center"
        }}
      >
        <Box
          sx={{
            dispaly: "flex",
            flexDirection: "column",
            width: "30%",
            backgroundColor: "grey",
            alignItems: "center",
            justifyContent:"center",
            textAlign:"center",
            padding:"10px 15px",
            borderRadius:"10px",
            gap:3
          }}
        >
          <Box>
            <Typography>Signin</Typography>
          </Box>
          <Box sx={{  dispaly: "flex",
            flexDirection: "column"
            ,gap:3,padding:"20px"}}>
            <TextField label="Email" type="text" />
            <TextField label="Password" type="Password" />
            <TextField label="Phone Number" type="Number" />

          </Box>
          <Box>
          
            <Button style={{backgroundColor:"violet"}} onClick={()=>(Navigate("/Homepg"))}>Submit</Button><br></br>
            Already have an account?
            <Button style={{backgroundColor:"violet"}} onClick={()=>(Navigate("/"))}>login</Button>
          </Box>
        </Box>
      </Box>
      </>
  )
}

export default Signin