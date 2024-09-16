import React from 'react';
import ME  from '../../assets/eiffel.jpg'

import { AboutCard, AboutCards, AboutContainer, AboutContent, AboutMe, AboutMeImage, FaAwards, VscFolderLibrarys } from './styled';
import { FiUser } from 'react-icons/fi';


function About() {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            
            <AboutContainer className="container ">
                <AboutMe >
                  <AboutMeImage >
                    <img  src={ME} alt='About Image'/>
                  </AboutMeImage> 
                </AboutMe>
                  
                <AboutContent >
                    <AboutCards> 
                        <AboutCard >
                            <FaAwards className='about__icon'/>
                            <h5>Expirience</h5>
                            <small>1+ Years Working</small>
                        </AboutCard>
                        
                        <AboutCard >
                            <FiUser className='about__icon'/>
                            <h5>Clients</h5>
                            <small>200+clients</small>
                        </AboutCard>
                        
                        <AboutCard >
                            <VscFolderLibrarys className='about__icon'/>
                            <h5>Expirience</h5>
                            <small>1+ Years Working</small>
                        </AboutCard>
                       
                    </AboutCards>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam recusandae iste quaerat debitis eaque ad delectus, itaque ex, deserunt eos dolorum animi optio voluptatum? Ipsum sapiente distinctio natus consequuntur dicta.</p>

                       <a href='#contact' className='btn btn-primary' >Let's Talk</a>
                </AboutContent>
            </AboutContainer>
        </section>
    );
}

export default About;