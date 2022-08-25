import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import {BsLinkedin} from 'react-icons/bs'
import {
    FooterContainer,
    FooterLogo,
    PermaLinks,
    FooterSocials,
    FooterCopyRight,
    Par}
 from './styled'

const Footer = () => {
    return (
        <FooterContainer id='footer'>
            <FooterLogo  href='#'>Hire Me!</FooterLogo>
            <Par>I am looking for a job opportunity where I can learn,
            develop and evolve in my professional career.
            </Par>
            
            <PermaLinks>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#contact'>Contact</a></li>
            </PermaLinks>
            <FooterSocials>
                <a href='https://www.facebook.com/mdf18/'><FaFacebookF/></a>
                <a href='https://www.instagram.com/michaeldouglasfm/'><FiInstagram/></a>
                <a href='https://www.linkedin.com/in/michaeldouglasf/'><BsLinkedin/></a>
            </FooterSocials>
            <FooterCopyRight>
                <small>&copy; MD All rights reserved.</small>
            </FooterCopyRight>
        </FooterContainer>
    );
};

export default Footer;