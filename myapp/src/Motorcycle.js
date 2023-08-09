import React from "react";
import Layout from "./Layout/Layout";
import { Box, Button } from "@mui/material";
import Meteor650 from "./Assest/Meteor 650.png";
import Hunter from "./Assest/Hunter 350.png";
import Scram411 from "./Assest/Scram 411.png";
import Classic350 from "./Assest/Classic 350.png";
import Meteor350 from "./Assest/Meteor 350.png";
import Interceptor from "./Assest/Interceptor.png";
import Continantal from "./Assest/Continental GT.png";
import Himalayan from "./Assest/Himalayan.png";
import Bullet from "./Assest/Bullet.png";

function Motorcycle() {
  return (
    <>
      <Layout>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            overflow: "hidden",
            backgroundColor:"#c2c2a3"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              padding: "20px",
              alignItems: "center",
              color: "#fff",
              backgroundColor: "#222211",
            }}
          >
            Motorcycle
          </div>
          <div style={{display:"flex",flexxDirection:"row",width:"100%",alignItems:"left"}}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              
                width: "20%",
                padding:"20px",
                

              }}
            >
              <Button
                sx={{
                  color: "#000",
                  "&:hover": {
                    bgcolor: "#cc0000",
                    color: "#fff",
                    fontWeight: "bold",
                    
                  },
                  borderBottom:"1px solid gray",
                }}
              >
                Book a Test Ride
              </Button>
              <Button
                sx={{
                  color: "#000",
                  "&:hover": {
                    bgcolor: "#cc0000",
                    color: "#fff",
                    fontWeight: "bold",
                  },
                  borderBottom:"1px solid gray",
                }}
              >
                Configure Now
              </Button>
              <Button
                sx={{
                  color: "#000",
                  "&:hover": {
                    bgcolor: "#cc0000",
                    color: "#fff",
                    fontWeight: "bold",
                  },
                  borderBottom:"1px solid gray",
                }}
              >
                Find a Dealer
              </Button>
              <Button
                sx={{
                  color: "#000",
                  "&:hover": {
                    bgcolor: "#cc0000",
                    color: "#fff",
                    fontWeight: "bold",
                  },
                   borderBottom:"1px solid gray",
                }}
              >
                Find a Service Center
              </Button>
              <Button
                sx={{
                  color: "#000",
                  "&:hover": {
                    bgcolor: "#cc0000",
                    color: "#fff",
                    fontWeight: "bold",
                  },
                  borderBottom:"1px solid gray",
                }}
              >
                Finance
              </Button>
              <Button
                sx={{
                  color: "#000",
                  "&:hover": {
                    bgcolor: "#cc0000",
                    color: "#fff",
                    fontWeight: "bold",
                  },
                  borderBottom:"1px solid gray",
                }}
              >
                Owener's Manual
              </Button>
              <Button
                sx={{
                  color: "#000",
                  "&:hover": {
                    bgcolor: "#cc0000",
                    color: "#fff",
                    fontWeight: "bold",
                    border:"none"
                  },
                  borderBottom:"1px solid gray",
                  
                }}
              >
                Quike Start Guide
              </Button>
            </Box>
            <div style={{ display: "flex", flexDirection: "column", width: "80%",backgroundColor:"#222211" }}>
              <div
              style={{ display: "flex", flexDirection: "row", width: "100%" }}
            >
              <div>
                <div
                
                >
                  <img  style={{ display: "flex", flexDirection: "row", width: "100%", }} src={Meteor650} alt="Meteor 650"></img>
                  <div style={{padding:"2px",backgroundColor:"#222211",color:"#fff",width:"100%",fontSize:"20px",fontWeight:"2px",textAlign:"center"}}>Meteor 650</div>
                </div>
              </div>
              <div>
                <div style={{ display: "flex", flexDirection: "Column",}}>
                  <img  style={{ display: "flex", flexDirection: "row", width: "100%" }} src={Hunter} alt="hunter 350"></img>
                  <div style={{padding:"2px",backgroundColor:"#222211",color:"#fff",width:"100%",fontSize:"20px",fontWeight:"2px",textAlign:"center"}}>Hunter 350</div>
                </div>
              </div>
              <div>
                <div>
                  <img  style={{ display: "flex", flexDirection: "row", width: "100%" }} src={Scram411} alt="Scram 411"></img>
                  <div style={{padding:"2px",backgroundColor:"#222211",color:"#fff",width:"100%",fontSize:"20px",fontWeight:"2px",textAlign:"center"}}>Scram 411</div>
                </div>
              </div>
            </div>
            <div
              style={{ display: "flex", flexDirection: "row", width: "100%" }}
            >
              <div>
                <div
                
                >
                  <img  style={{ display: "flex", flexDirection: "row", width: "100%" }} src={Classic350} alt="classic 350"></img>
                  <div style={{padding:"2px",backgroundColor:"#222211",color:"#fff",width:"100%",fontSize:"20px",fontWeight:"2px",textAlign:"center"}}>Classic 350</div>
                </div>
              </div>
              <div>
                <div style={{ display: "flex", flexDirection: "Column",alignItems:"center" }}>
                  <img  style={{ display: "flex", flexDirection: "row", width: "100%" }} src={Meteor350} alt="meteor 350"></img>
                  <div style={{padding:"2px",backgroundColor:"#222211",color:"#fff",width:"100%",fontSize:"20px",fontWeight:"2px",textAlign:"center"}}>Meteor 350</div>
                </div>
              </div>
              <div>
                <div>
                  <img  style={{ display: "flex", flexDirection: "row", width: "100%" }} src={Interceptor} alt="Interceptor"></img>
                  <div style={{padding:"2px",backgroundColor:"#222211",color:"#fff",width:"100%",fontSize:"20px",fontWeight:"2px",textAlign:"center"}}>Interceptor</div>
                </div>
              </div>
                    
            </div>
            <div
              style={{ display: "flex", flexDirection: "row", width: "100%" }}
            >
              <div>
                <div
                
                >
                  <img  style={{ display: "flex", flexDirection: "row", width: "100%" }} src={Continantal} alt="Continental"></img>
                  <div style={{padding:"2px",backgroundColor:"#222211",color:"#fff",width:"100%",fontSize:"20px",fontWeight:"2px",textAlign:"center"}}>Contenental GT</div>
                </div>
              </div>
              <div>
                <div style={{ display: "flex", flexDirection: "Column",alignItems:"center" }}>
                  <img  style={{ display: "flex", flexDirection: "row", width: "100%" }} src={Himalayan} alt="himalayan"></img>
                  <div style={{padding:"2px",backgroundColor:"#222211",color:"#fff",width:"100%",fontSize:"20px",fontWeight:"2px",textAlign:"center"}}>Himalayan</div>
                </div>
              </div>
              <div>
                <div>
                  <img  style={{ display: "flex", flexDirection: "row", width: "100%" }} src={Bullet} alt="Bullet"></img>
                  <div style={{padding:"2px",backgroundColor:"#222211",color:"#fff",width:"100%",fontSize:"20px",fontWeight:"2px",textAlign:"center"}}>Bullet</div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Motorcycle;
