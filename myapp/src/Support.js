import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Layout from "./Layout/Layout";
import stores from "./Assest/locateus/stores.png";
import Service from "./Assest/locateus/serviceCentre.png";
import Parts from "./Assest/locateus/parts.png";
import vintage from "./Assest/locateus/vintage.png";
import garage from "./Assest/locateus/garage.png";
import ride from "./Assest/locateus/ride.png";

function LocateUs() {
  return (
    <>
      <Layout>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              backgroundColor: "#222211",
              color: "#fff",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "row", width: "100%" }}
            >
              <div>
                <img
                  src={stores}
                  alt="Stores"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                ></img>
                <div
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    fontSize: "20px",
                    fontWeight: "2px",
                  }}
                >
                  Contact Us
                  <br />
                  For assistanceon all thing Enfield,
                  <br />
                  Contact us at:1800 210 0007
                  <br />
                  (roading Assistantant 24X7 &<br /> Customer Care 9 AM - 9PM)
                </div>
              </div>
              <div>
                <img
                  src={Service}
                  alt="Stores"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                ></img>
                <div
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    fontSize: "20px",
                    fontWeight: "2px",
                  }}
                >
                  Write To us
                  <br />
                  Email your query,Feedback or
                  <br />
                  Suggest to
                  <br />
                  suport@royalenfield.com
                </div>
              </div>
              <div>
                <img
                  src={Parts}
                  alt="Stores"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                ></img>
                <div
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    fontSize: "20px",
                    fontWeight: "2px",
                  }}
                >
                  FAQ'S
                  <br />
                  Get answered to the most commonly
                  <br />
                  aksked questions
                </div>
              </div>
              <div>
                <img
                  src={vintage}
                  alt="Stores"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                ></img>
                <div
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    fontSize: "20px",
                    fontWeight: "2px",
                  }}
                >
                  Road Side Assistance
                  <br />
                  Find the details about the emergency
                  <br />
                  roside assistance programme{" "}
                </div>
              </div>
            </div>
            <div
              style={{ display: "flex", flexDirection: "row", width: "100%" }}
            >
              <div style={{ position: "relative" }}>
                <img
                  src={vintage}
                  alt="Stores"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                ></img>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    padding: "10px",
                    fontSize: "30px",
                    fontWeight: "20px",
                    position: "absolute",
                    top: "0",
                    marginTop: "20%",
                    marginLeft: "5px",
                  }}
                >
                  Owner's Manual
                  <br />
                  Know your motorcycle inside-out. Download your own manual.
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <img
                  src={garage}
                  alt="Stores"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                ></img>
                <div
                  style={{
                    textAlign: "center",
                    padding: "2px",
                    fontSize: "40px",
                    fontWeight: "20px",
                    position: "absolute",
                    top: "0",
                    marginTop: "22%",
                    marginLeft: "120px",
                  }}
                >
                  Quick Start Guide
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <img
                  src={ride}
                  alt="Stores"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                ></img>
                <div
                  style={{
                    textAlign: "center",
                    padding: "2px",
                    fontSize: "40px",
                    fontWeight: "20px",
                    position: "absolute",
                    top: "0",
                    marginTop: "22%",
                    marginLeft: "120px",
                  }}
                >
                  Recall Service
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              padding: "20px",
              fontSize: "30px",
              fontWeight: "20px",
              textAlign: "center",
              backgroundColor: "#111109",
              color: "#fff",
            }}
          >
            Frequently Asked Questions
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              padding: "20px",
            }}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "60%" }}
            >
              <div>Categories</div>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <Button
                  sx={{
                    color: "#000",
                    "&:hover": {
                      bgcolor: "#cc0000",
                      color: "#fff",
                      fontWeight: "bold",
                    },
                    borderBottom: "1px solid gray",
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
                    borderBottom: "1px solid gray",
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
                    borderBottom: "1px solid gray",
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
                    borderBottom: "1px solid gray",
                  }}
                >
                  Book a Test Ride
                </Button>
              </Box>
            </Box>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "70%",
                padding: "0px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  marginLeft: "20%",
                }}
              >
                Motorcycles
              </div>
            </div>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                padding: "40px",
              }}
            >
              <Box>
                <FormControl
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#fff",
                  }}
                >
                  <InputLabel id="demo-simple-select-label">
                    Select Service center
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                  >
                    <MenuItem value={10}>Satyamangalam</MenuItem>
                    <MenuItem value={20}>Allapulzha</MenuItem>
                    <MenuItem value={30}>Kaadubeesnahalli</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default LocateUs;
