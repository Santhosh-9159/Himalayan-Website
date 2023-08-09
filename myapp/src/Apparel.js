import React from 'react'
import Art from './Assest/ride/Art.png';
import Layout from './Layout/Layout'
import glove from './Assest/ride/glove.png';
import helmet from './Assest/ride/helmet.png';
import boots from './Assest/ride/boots.png';
import jacket from './Assest/ride/jacket.png';
import MLT from './Assest/ride/MLT.png';
import Tshirts from './Assest/ride/T shirts.png';
import Shirts from './Assest/ride/Shirts.png';
import Mask from './Assest/ride/Mask.png';
import Bag from './Assest/ride/Bag.png';
import belt from './Assest/ride/belt.png';
import headgare from './Assest/ride/headgare.png';
import paints from './Assest/ride/paints.png';
import wallet from './Assest/ride/wallet.png';

function Apparel() {
  return (
<>
<Layout>
    <div style={{display:"flex",flexDirection:"column",width:'100%',backgroundColor:"#111109",color:"#fff",overflow:"hidden"}}>
        <div style={{display:"flex",flexDirection:"column",width:'100%',padding:"20px",fontSize:'30px',fontWeight:"20px"}}>Apparel & Merchandise</div>
        <div style={{display:"flex",flexDirection:"column",width:'100%',padding:"10px",fontSize:'20px',fontWeight:"20px"}}>Apparel</div>
        <div style={{display:"flex",flexDirection:"column",width:'100%'}}><img src={Art}alt='art' ></img></div>
        <div style={{display:"flex",flexDirection:"column",width:'100%',padding:"20px",fontSize:'30px',fontWeight:"20px",textAlign:"center"}}>Collections</div>
        
        <div style={{display:"flex",flexDirection:"row",width:'100%'}}>
            <div style={{display:"flex",flexDirection:"row",}}>
                <img src={glove} alt='glove' style={{display:"flex",flexDirection:"row",width:'100%'}}></img>
                <div style={{display:"flex",flexDirection:"column",width:'100%',padding:"10px",fontSize:'30px',fontWeight:"20px",position:"absolute",marginTop:"10%",marginLeft:"12%"}}>Gloves</div>
            </div>
             <div style={{display:"flex",flexDirection:"row",}}>
                <img src={helmet} alt='helmet' style={{display:"flex",flexDirection:"row",width:'100%'}}></img>
                <div style={{display:"flex",flexDirection:"column",width:'100%',padding:"10px",fontSize:'30px',fontWeight:"20px",position:"absolute",marginTop:"10%",marginLeft:"12%"}}>Helemets</div>
            </div>
            <div style={{display:"flex",flexDirection:"row",}}>
                <img src={boots} alt='boots' style={{display:"flex",flexDirection:"row",width:'100%'}}></img>
                <div style={{display:"flex",flexDirection:"column",width:'100%',padding:"10px",fontSize:'30px',fontWeight:"20px",position:"absolute",marginTop:"10%",marginLeft:"12%"}}>Boots</div>
            </div>
        </div>
        <div style={{display:"flex",flexDirection:"row",width:'100%'}}>
            <div style={{display:"flex",flexDirection:"row",}}>
                <img src={jacket} alt='jacket' style={{display:"flex",flexDirection:"row",width:'100%'}}></img>
                <div style={{display:"flex",flexDirection:"column",width:'100%',padding:"10px",fontSize:'30px',fontWeight:"20px",position:"absolute",marginTop:"12.9%",marginLeft:"12%"}}>Jackets</div>
            </div>
             <div style={{display:"flex",flexDirection:"row",}}>
                <img src={MLT} alt='MLT' style={{display:"flex",flexDirection:"row",width:'100%'}}></img>
                <div style={{display:"flex",flexDirection:"column",width:'100%',padding:"10px",fontSize:'30px',fontWeight:"20px",position:"absolute",marginTop:"13%",marginLeft:"12%"}}>MLG 1901</div>
            </div>
            <div style={{display:"flex",flexDirection:"row",}}>
                <img src={Tshirts} alt='Tshirts' style={{display:"flex",flexDirection:"row",width:'100%'}}></img>
                <div style={{display:"flex",flexDirection:"column",width:'100%',padding:"10px",fontSize:'30px',fontWeight:"20px",position:"absolute",marginTop:"10%",marginLeft:"12%",textShadow:"5px 10px #888888"}}>T-Shirts</div>
            </div>
        </div>
        <div style={{display:"flex",flexDirection:"row",width:'100%'}}>
            <div style={{display:"flex",flexDirection:"row",}}>
                <img src={Shirts} alt='Shirts' style={{display:"flex",flexDirection:"row",width:'100%'}}></img>
                <div style={{display:"flex",flexDirection:"column",width:'100%',padding:"10px",fontSize:'30px',fontWeight:"20px",position:"absolute",marginTop:"18%",marginLeft:"12%"}}>Shirts</div>
            </div>
             <div style={{display:"flex",flexDirection:"row",}}>
                <img src={Mask} alt='Mask' style={{display:"flex",flexDirection:"row",width:'100%'}}></img>
                <div style={{display:"flex",flexDirection:"column",width:'100%',padding:"10px",fontSize:'30px',fontWeight:"20px",position:"absolute",marginTop:"13%",marginLeft:"12%"}}>Masks</div>
            </div>
            <div style={{display:"flex",flexDirection:"row",}}>
                <img src={Bag} alt='Bag' style={{display:"flex",flexDirection:"row",width:'100%'}}></img>
                <div style={{display:"flex",flexDirection:"column",width:'100%',padding:"10px",fontSize:'30px',fontWeight:"20px",position:"absolute",marginTop:"13%",marginLeft:"12%"}}>Bags</div>
            </div>
        </div >
        <div style={{display:"flex",flexDirection:"row",width:'100%'}}>
            <div style={{display:"flex",flexDirection:"row",}}>
                <img src={belt} alt='belt' style={{display:"flex",flexDirection:"row",width:'100%'}}></img>
                <div style={{display:"flex",flexDirection:"column",width:'100%',padding:"10px",fontSize:'30px',fontWeight:"20px",position:"absolute",marginTop:"12%",marginLeft:"5px"}}>Belts</div>
            </div>
             <div style={{display:"flex",flexDirection:"row",}}>
                <img src={headgare} alt='headgare' style={{display:"flex",flexDirection:"row",width:'100%'}}></img>
                <div style={{display:"flex",flexDirection:"column",width:'100%',padding:"10px",fontSize:'30px',fontWeight:"20px",position:"absolute",marginTop:"12%",marginLeft:"5px"}}>Headgares</div>
            </div>
            <div style={{display:"flex",flexDirection:"row",}}>
                <img src={paints} alt='paints' style={{display:"flex",flexDirection:"row",width:'100%'}}></img>
                <div style={{display:"flex",flexDirection:"column",width:'100%',padding:"10px",fontSize:'30px',fontWeight:"20px",position:"absolute",marginTop:"11%",marginLeft:"5px",textShadow:"5px 10px #888888"}}>Motorcycle paints T-shirts</div>
            </div>
            <div style={{display:"flex",flexDirection:"row",}}>
                <img src={wallet} alt='wallet' style={{display:"flex",flexDirection:"row",width:'100%'}}></img>
                <div style={{display:"flex",flexDirection:"column",width:'100%',padding:"10px",fontSize:'30px',fontWeight:"20px",position:"absolute",marginTop:"12%",marginLeft:"5px"}}>Wallets</div>
            </div>
        </div>
    </div>
</Layout>
</> 
 )
}

export default Apparel