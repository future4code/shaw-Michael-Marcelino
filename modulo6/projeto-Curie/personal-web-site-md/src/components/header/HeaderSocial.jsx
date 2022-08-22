import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {HeaderSocials} from './styled'
function HeaderSocial() {
    return (
        <HeaderSocials >
            <a href='https://www.linkedin.com/in/michaeldouglasf/' target="_blank"><BsLinkedin/></a>
            <a href='https://www.github.com/michaeldouglasf' target="_blank"><FaGithub/></a>
            <a href='https://www.instagram.com/michaeldouglasfm' target="_blank"><FaInstagram/></a>
        </HeaderSocials>
    );
}

export default HeaderSocial;