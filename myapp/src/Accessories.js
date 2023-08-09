import Meteor650 from "./Assest/Meteor 650.png";
import Hunter from "./Assest/Hunter 350.png";
import Scram411 from "./Assest/Scram 411.png";
import Classic350 from "./Assest/Classic 350.png";
import Meteor350 from "./Assest/Meteor 350.png";
import Interceptor from "./Assest/Interceptor.png";
import Continantal from "./Assest/Continental GT.png";
import Himalayan from "./Assest/Himalayan.png";
import Bullet from "./Assest/Bullet.png";
import Layout from "./Layout/Layout";



function LocateUs() {
  return (
<>
<Layout>
<div style={{display:"flex",flexDirection:"column",width:"100%",overflow:"hidden"}}>
    <div style={{display:"flex",flexDirection:"column",padding:"20px",color: "#fff",
              backgroundColor: "#222211",justifyContent:"center",textAlign:"center"}}>
        <div>Select By Motorcycle</div>
    </div>
   <div style={{display:"flex",flexDirection:"column",width:"100%",backgroundColor:"#222211",color:"#fff"}}>
    <div style={{display:"flex",flexDirection:"row",width:"100%",}}>
        <div>
            <img src={Meteor650} alt='Stores'style={{display:"flex",flexDirection:"column",width:"100%",}} ></img>
            <div style={{textAlign:"center",padding:"2px",fontSize:"20px",fontWeight:"2px"}}>Meteor650</div>
        </div>
        <div>
            <img src={Hunter} alt='Stores'style={{display:"flex",flexDirection:"column",width:"100%",}} ></img>
            <div style={{textAlign:"center",padding:"2px",fontSize:"20px",fontWeight:"2px"}}>Hunter 350</div>
        </div>
        <div>
            <img src={Scram411} alt='Stores'style={{display:"flex",flexDirection:"column",width:"100%",}} ></img>
            <div style={{textAlign:"center",padding:"2px",fontSize:"20px",fontWeight:"2px"}}>Scram411</div>
        </div>
    </div>
    <div style={{display:"flex",flexDirection:"row",width:"100%",}}>
        <div>
            <img src={Classic350} alt='Stores'style={{display:"flex",flexDirection:"column",width:"100%",}} ></img>
            <div style={{textAlign:"center",padding:"2px",fontSize:"20px",fontWeight:"2px"}}>Classic350</div>
        </div>
        <div>
            <img src={Meteor350} alt='Stores'style={{display:"flex",flexDirection:"column",width:"100%",}} ></img>
            <div style={{textAlign:"center",padding:"2px",fontSize:"20px",fontWeight:"2px"}}>Meteor350</div>
        </div>
        <div>
            <img src={Interceptor} alt='Stores'style={{display:"flex",flexDirection:"column",width:"100%",}} ></img>
            <div style={{textAlign:"center",padding:"2px",fontSize:"20px",fontWeight:"2px"}}>Interceptor</div>
        </div>
    </div>
    <div style={{display:"flex",flexDirection:"row",width:"100%",}}>
        <div>
            <img src={Continantal} alt='Stores'style={{display:"flex",flexDirection:"column",width:"100%",}} ></img>
            <div style={{textAlign:"center",padding:"2px",fontSize:"20px",fontWeight:"2px"}}>Contenental</div>
        </div>
        <div>
            <img src={Himalayan} alt='Stores'style={{display:"flex",flexDirection:"column",width:"100%",}} ></img>
            <div style={{textAlign:"center",padding:"2px",fontSize:"20px",fontWeight:"2px"}}>Himalayan</div>
        </div>
        <div>
            <img src={Bullet} alt='Stores'style={{display:"flex",flexDirection:"column",width:"100%",}} ></img>
            <div style={{textAlign:"center",padding:"2px",fontSize:"20px",fontWeight:"2px"}}>Bullet</div>
        </div>
    </div>
   </div>
</div>
</Layout>
</>
    )
}

export default LocateUs