import React from 'react'
import Layout from './Layout/Layout'
import stores from './Assest/locateus/stores.png';
import Service from './Assest/locateus/serviceCentre.png';
import Parts from './Assest/locateus/parts.png';
import vintage from './Assest/locateus/vintage.png';
import garage from './Assest/locateus/garage.png';
import ride from './Assest/locateus/ride.png';

function LocateUs() {
  return (
<>
<Layout>
<div style={{display:"flex",flexDirection:"column",width:"100%",overflow:"hidden"}}>
    <div style={{display:"flex",flexDirection:"column",padding:"20px",color: "#fff",
              backgroundColor: "#222211",justifyContent:"center",textAlign:"center"}}>
        <div>Locate US</div>
    </div>
   <div style={{display:"flex",flexDirection:"column",width:"100%",backgroundColor:"#222211",color:"#fff"}}>
    <div style={{display:"flex",flexDirection:"row",width:"100%",}}>
        <div>
            <img src={stores} alt='Stores'style={{display:"flex",flexDirection:"column",width:"100%",}} ></img>
            <div style={{textAlign:"center",padding:"2px",fontSize:"20px",fontWeight:"2px"}}>Stores</div>
        </div>
        <div>
            <img src={Service} alt='Stores'style={{display:"flex",flexDirection:"column",width:"100%",}} ></img>
            <div style={{textAlign:"center",padding:"2px",fontSize:"20px",fontWeight:"2px"}}>Service Centers</div>
        </div>
        <div>
            <img src={Parts} alt='Stores'style={{display:"flex",flexDirection:"column",width:"100%",}} ></img>
            <div style={{textAlign:"center",padding:"2px",fontSize:"20px",fontWeight:"2px"}}>Genuine Parts Distributors</div>
        </div>
    </div>
    <div style={{display:"flex",flexDirection:"row",width:"100%",}}>
        <div>
            <img src={vintage} alt='Stores'style={{display:"flex",flexDirection:"column",width:"100%",}} ></img>
            <div style={{textAlign:"center",padding:"2px",fontSize:"20px",fontWeight:"2px"}}>Vintage Store</div>
        </div>
        <div>
            <img src={garage} alt='Stores'style={{display:"flex",flexDirection:"column",width:"100%",}} ></img>
            <div style={{textAlign:"center",padding:"2px",fontSize:"20px",fontWeight:"2px"}}>Garage Cafe</div>
        </div>
        <div>
            <img src={ride} alt='Stores'style={{display:"flex",flexDirection:"column",width:"100%",}} ></img>
            <div style={{textAlign:"center",padding:"2px",fontSize:"20px",fontWeight:"2px"}}>Leh Rider Suport</div>
        </div>
    </div>
   </div>
</div>
</Layout>
</>
    )
}

export default LocateUs