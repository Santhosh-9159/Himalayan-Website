import React from 'react'
import Layout from './Layout/Layout'
import adventurepage from "./Assest/ride/adventurepage.png";
import Discovery from "./Assest/ride/Discovery.png";
import Training from "./Assest/ride/Training.png";
function Raid() {
  return (
    <>
    <Layout>
<div style={{display:"flex",flexDirection:"column",backgroundColor:"#111109",color:"#fff",width:"100%"}}>
    <div style={{display:"flex",flexDirection:"column",padding:"20px",fontSize:"20px",fontWeight:"2px"}}>Ride</div>
    <div >
        <div style={{display:"flex",flexDirection:"column",width:"100%",textAlign:"center",marginTop:"10px",fontSize:"40px",fontWeight:"20px"}}>Rides</div>
    </div>
    <div  style={{display:"flex",flexDirection:"column",width:"100%"}} >
      <div style={{display:"flex",flexDirection:"column",width:"100%",marginLeft:"5%",marginTop:"50px"}}>
        <img style={{display:"flex",flexDirection:"column",width:"45%",borderRadius:"20px"}} src={adventurepage}alt='adventure'></img>
        <div style={{display:"flex",flexDirection:"column",width:"100%",position:"absolute",fontSize:"40px",fontWeight:"20px",marginTop:"10px",marginLeft:"30px"}}>ADVENTURE</div>
        </div>
    </div>
     <div  style={{display:"flex",flexDirection:"column",width:"100%"}} >
      <div style={{display:"flex",flexDirection:"column",width:"100%",marginLeft:"50%",marginTop:"100px"}}>
        <img style={{display:"flex",flexDirection:"column",width:"45%",borderRadius:"20px"}} src={Discovery}alt='Discovery'></img>
        <div style={{display:"flex",flexDirection:"column",width:"100%",position:"absolute",fontSize:"40px",fontWeight:"20px",marginTop:"10px",marginLeft:"30px"}}>DISCOVERY</div>
        </div>
    </div>
     <div  style={{display:"flex",flexDirection:"column",width:"100%"}} >
      <div style={{display:"flex",flexDirection:"column",width:"100%",marginLeft:"5%",marginTop:"100px",marginBottom:"60px"}}>
        <img style={{display:"flex",flexDirection:"column",width:"45%",borderRadius:"20px"}} src={Training}alt='training'></img>
        <div style={{display:"flex",flexDirection:"column",width:"100%",position:"absolute",fontSize:"40px",fontWeight:"20px",marginTop:"10px",marginLeft:"30px",textShadow:"5px 10px #888888"}}>TRAINING</div>
        </div>
    </div>
</div>
    </Layout>
    </>
  )
}

export default Raid