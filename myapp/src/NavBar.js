import React from "react";
import logo from "./Assest/logo.png";

import {  Navbar } from "./components/Array";
import { Button,Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <div
          style={{
            backgroundColor: "#000",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            padding: "20px 0",
            justifyContent: "space-between",
          }}
        >
          <img
            style={{
              display: "flex",
              flexDirection: "column",
              width: "15%",
              padding: "5px 10px",
              left: 0,
            }}
            src={logo}
            alt="logo"
            onClick={()=>navigate("/Homepg")}

          ></img>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "55%",
            }}
          >
            {Navbar.map((item, id) => {
              return (
                <Box key={id}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    color: "#fff",
                    justifyContent: "space-evenly",
                    cursor: "pointer",
                    "& hover":{ backgroundColor:"#cc0000",color:"#fff",fontWeight:"bold"}
                  }}
                  onClick={()=>{navigate(item.to)}}
                >
                  {item.title} 
                </Box>
              );
            })}
          </div>
          <div style={{ width: "10%" }}>
            <Button
              sx={{
                padding: "5px 10px",
                bgcolor: "#000",
                color:"#fff",
                "&:hover": { bgcolor:"#4da6ff",color:"#fff",fontWeight:"bold"},
              }}
            >
              Login
            </Button>
          </div>
        </div>
     
          
      </div>
    </>
  );
}

export default NavBar;
