import { Box, Button, } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const Navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          padding:"20px",
          backgroundColor:"#000",
          color:"#fff"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{fontSize:"20px",fontWeight:"40px"}}>Motorcycle</div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "20px",
              
              
            }}
          >
            <Box><Button sx={{color:"#fff","&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Super Meteor 650</Button></Box>
            <div><Button sx={{color:"#fff","&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Hunter 350</Button></div>
            <div><Button sx={{color:"#fff","&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Scram 411</Button></div>
            <div><Button sx={{color:"#fff","&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Classic 350</Button></div>
            <div><Button sx={{color:"#fff","&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Meteor 350</Button></div>
            <div><Button sx={{color:"#fff","&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Interceptor 650</Button></div>
            <div><Button sx={{color:"#fff","&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Continantal GT</Button></div>
            <div><Button sx={{color:"#fff","&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}onClick={()=>Navigate("/Homepg")}>Himalayan</Button></div>
            <div><Button sx={{color:"#fff","&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Bullet 350</Button></div>
            <div><Button sx={{color:"#fff","&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Bullet ES</Button></div>
          </Box>
        </div>
        <div>
        <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
          <div style={{fontSize:"20px",fontWeight:"40px"}}>Rides&Events</div>
          <div><Button sx={{color:"#fff","&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Rides</Button></div>
          </Box>
        </div>
        <div>
          <div style={{fontSize:"20px",fontWeight:"40px"}}>Supports</div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "20px",
              gap: 2,
            }}
          >
          <div><Button sx={{color:"#fff","&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Service Centers</Button></div>
          <div><Button sx={{color:"#fff","&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Owner's Manual</Button></div>
          <div><Button sx={{color:"#fff","&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Contact us</Button></div>
          <div><Button sx={{color:"#fff","&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Book a Test Ride</Button></div>
          <div><Button sx={{color:"#fff","&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Make it yours</Button></div>
          <div><Button sx={{color:"#fff","&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Become a Dealer</Button></div>
          <div><Button sx={{color:"#fff","&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Become a Genuine</Button></div>
          <div><Button sx={{color:"#fff","&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Parts Distributor</Button></div>
          </Box>
        </div>
        <div>
        <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
          <div style={{fontSize:"20px",fontWeight:"40px"}}>About us </div>
          <div><Button sx={{color:"#fff","&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Since 1901</Button></div>
          <div><Button sx={{color:"#fff","&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>About Eicher Motors</Button></div>
          </Box>
        </div>
        <div>
        <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
          <div style={{fontSize:"20px",fontWeight:"40px"}}>News&Media</div>
          <div><Button sx={{color:"#fff","&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>News</Button></div>
          <div><Button sx={{color:"#fff","&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Press Releases</Button></div>
          <div><Button sx={{color:"#fff","&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Media Kit</Button></div>
          <div><Button sx={{color:"#fff","&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Events</Button></div>
          </Box>
        </div>
        <div>
        <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
          <div style={{fontSize:"20px",fontWeight:"40px"}}>Careers</div>
          <div><Button sx={{color:"#fff","&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Life at Royal Enfield</Button></div>
          </Box>
        </div>
        <div>
          <div style={{fontSize:"20px",fontWeight:"40px"}}>Our World</div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "20px",
              gap: 2,
            }}
          >
          <Box><Button sx={{color:"#fff" ,"&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Royal Enfield Tripper</Button></Box>
          <Box><Button sx={{color:"#fff" ,"&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Royal Enfield App</Button></Box>
          <Box><Button sx={{color:"#fff" ,"&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Custom World</Button></Box>
          <Box><Button sx={{color:"#fff" ,"&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>News and Media</Button></Box>
          <Box><Button sx={{color:"#fff" ,"&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Since 1901</Button></Box>
          <Box><Button sx={{color:"#fff","&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Wallpapers</Button></Box>
          <Box><Button sx={{color:"#fff","&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Forum</Button></Box>
          <Box><Button sx={{color:"#fff","&:hover": { bgcolor:"#cc0000",color:"#fff",fontWeight:"bold"},}}>Trip Stories</Button></Box>
          </Box>
        </div>
      </div>
    </>
  );
}

export default Footer;
