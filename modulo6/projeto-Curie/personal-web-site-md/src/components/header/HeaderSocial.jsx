import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

function HeaderSocial() {
    return (
        <div className="header__socials">
            <a href='https://www.linkedin.com/in/michaeldouglasf/' target="_blank"><BsLinkedin/></a>
            <a href='https://www.github.com' target="_blank"><FaGithub/></a>
            <a href='https://www.instagram.com' target="_blank"><BsFacebook/></a>
        </div>
    );
}

export default HeaderSocial;