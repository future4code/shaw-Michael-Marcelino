import React,{useState} from 'react';
import './nav.css'
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {TbMessageDots} from "react-icons/tb"
const Nav = () => {

  const [activeNav,setActiveNav] =useState('#')
    return (
        <nav>
          <a href='#' onClick={()=>setActiveNav('#')}   className={activeNav === '#' ?'active' :''}><AiOutlineHome/></a>
          <a href='#about' onClick={()=>setActiveNav('#about')}  className={activeNav === '#about' ?'active' :''}><AiOutlineUser/></a>
          <a href='#expirience'  onClick={()=>setActiveNav('#expirience')}  className={activeNav === '#expirience' ?'active' :''}><BiBook/></a>
          <a href='#services'   onClick={()=>setActiveNav('#services')}  className={activeNav === '#services' ?'active' :''} ><RiServiceLine/></a>
          <a href='#contact'  onClick={()=>setActiveNav('#contact')}  className={activeNav === '#contact' ?'active' :''} ><TbMessageDots/></a>
        </nav>
    );
};

export default Nav