import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./Signin";
import Login from "./Login";
import Homepg from "./Homepg";
import Raid from "./Raid";
import Motorcycle from "./Motorcycle";
import SecondNavbar from "./SecondNavbar";
import NavBar from "./NavBar";
import Service from "./Service";
import PlaceSelectors from "./PlaceSelectors";
import LocateUs from "./LocateUs";
import Accessories from "./Accessories";
import Apparel from "./Apparel";
import World from "./OurWorld";
import Support from "./Support";


function App() {
  return (
   < >





        <BrowserRouter>
        <Routes>
          <Route path="/" element =  {< Login/>} />
          <Route path="/signin" element =  {< Signin/>} />
          <Route path="/Navbar" element =  {< NavBar/>} />
          <Route path="/Homepg" element =  {< Homepg/>} />
          <Route path="/Motorcycle" element =  {< Motorcycle/>} />
          <Route path="/navbar" element =  {< SecondNavbar/>} />
          <Route path="/Service" element =  {< Service/>} />
          <Route path="/PlaceSelectors" element =  {< PlaceSelectors/>} />
          <Route path="/LocateUS" element =  {< LocateUs/>} />
          <Route path="/Raid" element =  {< Raid/>} />
          <Route path="/Accessories" element =  {< Accessories/>} />
          <Route path="/Apparel" element =  {< Apparel/>} />
          <Route path="/Our World" element =  {< World/>} />
          <Route path="/Support" element =  {< Support/>} />


         


        </Routes>
        </BrowserRouter>
   </>
  );
}

export default App;
