import React,{useState} from 'react';
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {TbMessageDots} from "react-icons/tb"
import { Navi } from './styled';
const Nav = () => {

  const [activeNav,setActiveNav] =useState('#')
    return (
        <Navi>
          <a href='#' onClick={()=>setActiveNav('#')}   className={activeNav === '#' ?'active' :''}><AiOutlineHome/></a>
          <a href='#about' onClick={()=>setActiveNav('#about')}  className={activeNav === '#about' ?'active' :''}><AiOutlineUser/></a>
          <a href='#experience'  onClick={()=>setActiveNav('#expirience')}  className={activeNav === '#expirience' ?'active' :''}><BiBook/></a>
          <a href='#services'   onClick={()=>setActiveNav('#services')}  className={activeNav === '#services' ?'active' :''} ><RiServiceLine/></a>
          <a href='#contact'  onClick={()=>setActiveNav('#contact')}  className={activeNav === '#contact' ?'active' :''} ><TbMessageDots/></a>
        </Navi>
    );
};

export default Nav