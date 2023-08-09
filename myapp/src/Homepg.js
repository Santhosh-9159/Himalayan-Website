import React from 'react'
import Thestory  from "./Assest/Thestory.png";
import Adventure from "./Assest/Adventure.png";
import Versataile from "./Assest/Versataile.png";
import Tourminded from "./Assest/Tour-minded.png";
import Steadfast from "./Assest/Steadfast.png";
import Personalaize from "./Assest/Personalaize.png";
import Layout from './Layout/Layout';
import SecondNavbar from './SecondNavbar';

function Homepg() {
  return (
    <>
    <Layout>
      <SecondNavbar />
         <div style={{display:"flex", flexDirection:"column", width:"100%",}}>

{/* Images for home page */}
<div style={{display:"flex",flexDirection:"column",position:"relative",width:"100%",overflow:"hidden"}}>

 <div style={{display:"flex", width:"100%"}}>
   <img src={Thestory} alt="The story" ></img>
   </div>
   <div style={{width:"30%",position:"absolute",color:"#fff",marginLeft:"65%",fontSize:"20px",top:"100px"}}>
   THE STORY<br/><br/>
Decades of expeditions. Thousands of kilometers of traversing the most challenging terrain. Years of living and evolving with a machine that responds to the mountains. That's how we made the Himalayan, our first dual-purpose motorcycle.
      
   
 </div>
</div>

{/* second Images */}

 <div style={{display:"flex", width:"100%",overflow:"hidden"}}>
   <div>
     <img src={Adventure} alt="Adventure"></img>
     </div>
     <div style={{display:"flex",position:"absolute",marginLeft:"120px",marginTop:"200px",color:"#fff",fontSize:"20px",fontWeight:"2px"}}>
     ADVENTURE-READY HANDLING<br/><br/>
The half-duplex split cradle frame and long travel<br/> suspension keep you in harmony with road,<br/> rocks, and everything in between.
     </div>
</div>
           {/* Third imager     */}
           <div style={{display:"flex",width:"100%",overflow:"hidden",position:"relative"}}>
            <div>
             <img src={Versataile} alt='versatail'></img>
            </div>
            <div style={{display:"flex",position:"absolute",marginLeft:"120px",marginTop:"200px",color:"#fff",fontSize:"20px",fontWeight:"2px"}}>
            VERSATILE PERFORMANCE <br/><br/>
800mm seat height, perfectly positioned<br/> footpegs and handlebars reduce fatigue and give <br/>you a comfortable upright riding position<br></br> whether you sit or stand.
                 
            </div>
           </div>

           {/* fourth image */}

           <div style={{display:"flex",width:"100%",overflow:"hidden"}}>
            <div style={{display:"flex",width:"100%",flexDirection:"column"}}>
                <img src={Tourminded} alt='tour'></img>
            </div>
             <div style={{display:"flex",position:"absolute",width:"30%",color:"#fff",marginLeft:"120px",marginTop:"200px",fontSize:"20px",fontWeight:"2px"}}>
             TOUR-MINDED DESIGN<br/><br/>
The new improved seat lets you cover longer distances with even more comfort. Panniers at the back. Jerry cans in the front. The Himalayan's mounting points let you strap up and set off anytime. The LCD dashboard lets you track everything from miles to maintenance.
            </div>
           </div>
            
              {/* fivth image */}
              <div style={{display:"flex", width:"100%",overflow:"hidden"}}>
                <div>
                     <img src={Steadfast}alt='steadfast'></img>
                </div>
                <div style={{display:"flex",position:"absolute",width:"30%",color:"#fff",marginLeft:"120px",marginTop:"200px",fontSize:"20px",fontWeight:"2px"}}>
                FOR A STEADFAST RIDE<br/><br/>
Wire-spoked wheels with dual purpose tyres for steady grip on all roads and no roads.
                </div>
              </div>

                {/* sixth image */}
            <div style={{display:"flex", width:"100%",overflow:"hidden"}} >
              <div>
                <img src={Personalaize} alt='personalaize'></img>
              </div>
              <div style={{display:"flex",position:"absolute",width:"20%",color:"#fff",marginLeft:"925px",marginTop:"200px",fontSize:"20px",fontWeight:"20px"}}>
              PERSONALISE YOUR HIMALAYAN YOUR WAY. FROM DAY 1.
              </div>
            </div>
            </div>
</Layout>
    </>
  )
}

export default Homepg