import React from 'react';
import email from '../pics/email.png';
import Loc from '../pics/placeholder.png';
import P from '../pics/phone.png';
import fb from '../pics/facebook (1).png';
import insta from '../pics/instagram (1).png'
function Footer(){
    return(
       <div style={{display:'flex', background:'rgb(153, 2, 2)', padding: '10px', color:'white'}}>
        <img  style={{marginTop:"1.4%",paddingLeft:"50px", height:"20px", width:"20px"}} src={email} alt=""></img><p style={{paddingLeft:"10px" ,paddingRight:"50px"}}>contact@serineskinesthetics.com</p>
        <img  style={{marginTop:"1.4%", height:"20px", width:"20px"}} src={Loc} alt=""></img><p style={{paddingLeft:"5px" ,paddingRight:"50px"}}>House 1, Street3, Lane 10, Hostel City park Road Islamabad</p>
        <img  style={{marginTop:"1.4%", height:"20px", width:"20px"}} src={P} alt=""></img><p style={{paddingLeft:"5px" ,paddingRight:"160px"}}>+923143626338</p>
        <img style={{ marginTop:"5px", paddingRight:"10px", height:"40px", width:"40px"}} src={fb} alt=""></img>
        <img style={{ height:"50px", width:"50px"}} src={insta} alt=""></img>

       </div>

    );
}
export default Footer