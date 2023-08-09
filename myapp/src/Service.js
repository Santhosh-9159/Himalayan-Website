import React from "react";
import Layout from "./Layout/Layout";
import { Box, TextField } from "@mui/material";
import Wallpaper from "./Assest/april-1280X800.jpg";
import PlaceSelectors from './PlaceSelectors'

function Service() {
  return (
    <>
      <Layout>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
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
            Royal Enfield Service
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              backgroundImage: `URL(${Wallpaper})`,
              backgroundSize: "cover",
              width: "100%",
              height: "100vh",
              paddingTop:"100px"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                paddingLeft:"40px",
                width:"50%",
                marginLeft:"50px"

              }}
            >
              <div style={{ color: "#fff" }}>
                <h1>Service Booking</h1>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "60%",
                  color: "#fff",
                }}
              >
                <div>
                  <h3>
                    Make an appointment for Royal Enfield service from the
                    safety and comfort of your home.
                  </h3>
                </div>
              </div>
              <div style={{ color: "#fff" }}>
                <div>
                  <h2>Toll Free Number:</h2>
                  <div style={{color:"#cc0000"}}><h2>1800 210 0007</h2></div>
                </div>
              </div>
            </div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                gap: 3,
                Color:"#fff",
               // bgcolor:"#eff6f6a2",
                padding:"10px 20px"
              }}
            >
              <Box
                sx={{
                  width: 500,
                  
                  
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  Color:"#cc0000"

                }}
              >
                <TextField sx={{backgroundColor:"#fff"}} fullWidth label="Full Name *" Input="text" />
              </Box>
              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%",
                }}
              >
                <TextField sx={{backgroundColor:"#fff"}} fullWidth label="Email *" id="Email" />
              </Box>
              <PlaceSelectors/>
            </Box>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Service;
