import React from 'react'
import Layout from './Layout/Layout'
import World from "./Assest/ride/World.png";
import Meteor650 from "./Assest/Meteor 650.png";
import Hunter from "./Assest/Hunter 350.png";
import Scram411 from "./Assest/Scram 411.png";
import Classic350 from "./Assest/Classic 350.png";
import Meteor350 from "./Assest/Meteor 350.png";
import Interceptor from "./Assest/Interceptor.png";
import Continantal from "./Assest/Continental GT.png";
import Himalayan from "./Assest/Himalayan.png";
import Bullet from "./Assest/Bullet.png";


function OurWorld() {
  return (
<>
       <Layout>
        <div style={{display:"flex",flexDirection:"column",width:"100%",overflow:"hidden",backgroundColor:"#111109",color:"#fff",}}>
            <div style={{textAlign:"center",padding:"10px",fontSize:"20px",fontWeight:"2px"}}>OurWorld</div>
            <div>
                    <img src={World} alt='world' style={{display:"flex",flexDirection:"column",width:"100%",}}></img>
                </div>
            <div style={{display:"flex",flexDirection:"column",width:"100%",}}>
    <div style={{display:"flex",flexDirection:"row",width:"100%",}}>
        
        <div>
            <img src={Meteor650} alt='Stores'style={{display:"flex",flexDirection:"column",width:"100%",}} ></img>
            <div style={{textAlign:"center",padding:"2px",fontSize:"20px",fontWeight:"2px"}}>Custom World</div>
        </div>
        <div>
            <img src={Hunter} alt='Stores'style={{display:"flex",flexDirection:"column",width:"100%",}} ></img>
            <div style={{textAlign:"center",padding:"2px",fontSize:"20px",fontWeight:"2px"}}>Wallpapers</div>
        </div>
        <div>
            <img src={Scram411} alt='Stores'style={{display:"flex",flexDirection:"column",width:"100%",}} ></img>
            <div style={{textAlign:"center",padding:"2px",fontSize:"20px",fontWeight:"2px"}}>News and Media</div>
        </div>
    </div>
    <div style={{display:"flex",flexDirection:"row",width:"100%",}}>
        <div>
            <img src={Classic350} alt='Stores'style={{display:"flex",flexDirection:"column",width:"100%",}} ></img>
            <div style={{textAlign:"center",padding:"2px",fontSize:"20px",fontWeight:"2px"}}>Campaigns</div>
        </div>
        <div>
            <img src={Meteor350} alt='Stores'style={{display:"flex",flexDirection:"column",width:"100%",}} ></img>
            <div style={{textAlign:"center",padding:"2px",fontSize:"20px",fontWeight:"2px"}}>Forum</div>
        </div>
        <div>
            <img src={Interceptor} alt='Stores'style={{display:"flex",flexDirection:"column",width:"100%",}} ></img>
            <div style={{textAlign:"center",padding:"2px",fontSize:"20px",fontWeight:"2px"}}>Gallery</div>
        </div>
    </div>
    <div style={{display:"flex",flexDirection:"row",width:"100%",}}>
        <div>
            <img src={Continantal} alt='Stores'style={{display:"flex",flexDirection:"column",width:"100%",}} ></img>
            <div style={{textAlign:"center",padding:"2px",fontSize:"20px",fontWeight:"2px"}}>Careers</div>
        </div>
        <div>
            <img src={Himalayan} alt='Stores'style={{display:"flex",flexDirection:"column",width:"100%",}} ></img>
            <div style={{textAlign:"center",padding:"2px",fontSize:"20px",fontWeight:"2px"}}>Trip Stories</div>
        </div>
        <div>
            <img src={Bullet} alt='Stores'style={{display:"flex",flexDirection:"column",width:"100%",}} ></img>
            <div style={{textAlign:"center",padding:"2px",fontSize:"20px",fontWeight:"2px"}}>Since 1901</div>
        </div>
    </div>
   </div>
        </div>
       </Layout>
</>
    )
}

export default OurWorld