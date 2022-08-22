import React from 'react';
import { Service, ServiceHead, ServiceList, ServiceListIcon, ServicesContainer } from './styled';


const Services = () => {
    return (
        <section id='services'>
           <h5>What I Offer</h5> 
           <h2>Services</h2>

           <ServicesContainer className="container ">
                <Service >
                   <ServiceHead >
                        <h3>Frontend</h3>
                    </ServiceHead> 
                    <ServiceList >
                        <li>
                            <ServiceListIcon/>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <ServiceListIcon className='service__list-icon'/>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <ServiceListIcon className='service__list-icon'/>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <ServiceListIcon className='service__list-icon'/>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <ServiceListIcon className='service__list-icon'/>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <ServiceListIcon className='service__list-icon'/>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ServiceList>
                </Service>
                <Service >
                   <ServiceHead >
                        <h3>Backend</h3>
                    </ServiceHead> 
                    <ServiceList >
                        <li>
                            <ServiceListIcon/>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <ServiceListIcon className='service__list-icon'/>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <ServiceListIcon className='service__list-icon'/>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <ServiceListIcon className='service__list-icon'/>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <ServiceListIcon className='service__list-icon'/>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <ServiceListIcon className='service__list-icon'/>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ServiceList>
                </Service>
                <Service >
                   <ServiceHead >
                        <h3>Curso de Web Full Stack na Labenu</h3>
                    </ServiceHead> 
                    <ServiceList >
                        <li>
                            <ServiceListIcon/>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <ServiceListIcon className='service__list-icon'/>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <ServiceListIcon className='service__list-icon'/>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <ServiceListIcon className='service__list-icon'/>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <ServiceListIcon className='service__list-icon'/>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <ServiceListIcon className='service__list-icon'/>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ServiceList>
                </Service>
           </ServicesContainer>
        </section>
    );
};

export default Services;