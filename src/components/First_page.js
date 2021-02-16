import React from 'react'
import first from "./Images/2.svg"
import { Link } from 'react-router-dom'
import "./first_page.css"
import global from "./Images/eth.gif"
import image1 from  './Images/2.svg';



const First_page = () => (
  
  <div style={{  backgroundColor:"#def3ff",display: "block",textAlign:'center',width:"100%",height:"100%"
  }}>
    <img src={image1} height="250px" width="300px"/>
    <p style={{margin: "auto",textAlign:"center"}}>
  <h5 style={{textAlign:"center"}}>
    Decentralized Application Focused on Ethereum Smart Contract<br/>
  </h5>
  <b>Home</b>: Buying and Selling Application.<br/>
  <b>FAQ</b>: It includes how application works.
  </p>

    <ul style={{listStyleType:"none", display: "block", justifyContent: "center",paddingBottom:"178px" }}>
         {/* First_page then home and then guideline */}
      <Link to='/'></Link>
     
        <li style={{textAlign:"center"}} >
        <Link to='/Home'> 
        {/* <h2 class=".text-primary font-weight-bold" >
           HOME</h2> */}
           <button  className="btn btn-warning" style={{padding:"12px 30px 12px 30px"}}>HOME</button>
     </Link></li>
     <br/>
        <li style={{textAlign:"center"}}>
        <Link to='/How_to_use'>
        {/* <h2 class=".text-primary font-weight-bold" >
    FAQ</h2> */}
    <button  className="btn btn-warning" style={{padding:"12px 40px 12px 40px"}}>FAQ</button>
    </Link></li>
      </ul>
      
    </div>
)

export default First_page
