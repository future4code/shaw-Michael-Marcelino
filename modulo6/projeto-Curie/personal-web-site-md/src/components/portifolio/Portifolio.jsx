import React from 'react';
import FUTURE from '../../assets/FUTURE.png'
import MEXICAN_FOOD from '../../assets/mexican_food.png'
import POKEDEX from '../../assets/pokedex.png'
import TMDB from '../../assets/tmdb_movie.png'
import  MEGA_SENA from '../../assets/mega_sena.png'
import { PortifolioContainer, PortifolioItem, PortifolioItemImageCta, PortifolioItemImatge, PortifolioItemImatgeCta } from './styled';

const Portifolio = () => {
    return (
        <section id='portifolio'>
            <h5>My Recent Work</h5>
            <h2>Portifolio</h2>
            <PortifolioContainer className="container ">
                <PortifolioItem >
                    <PortifolioItemImatge >
                        <img src={FUTURE} alt='future eats'/>
                    </PortifolioItemImatge>
                        <h3>This is a portifolio item title</h3>
                        <PortifolioItemImageCta className="portifolio_item-cta">
                            <a href="https://github.com/michaeldouglasf" className='btn' >Github</a>
                            <a href="https://mexican.surge.sh/login" className='btn btn-primary' target='_blank'>Live Demo</a>
                       </PortifolioItemImageCta>
                </PortifolioItem>
                <PortifolioItem className='portifolio__items'>
                    <PortifolioItemImatge className="portifolio__item-image">
                        <img src={MEXICAN_FOOD} alt='future eats'/>
                    </PortifolioItemImatge>
                        <h3>This is a portifolio item title</h3>
                        <PortifolioItemImageCta className="portifolio_item-cta">
                            <a href="https://github.com/michaeldouglasf" className='btn' >Github</a>
                            <a href="https://mexican.surge.sh/login" className='btn btn-primary' target='_blank'>Live Demo</a>
                       </PortifolioItemImageCta>
                </PortifolioItem>
                <PortifolioItem className='portifolio__items'>
                    <PortifolioItemImatge className="portifolio__item-image">
                        <img src={TMDB} alt='future eats'/>
                    </PortifolioItemImatge>
                        <h3>This is a portifolio item title</h3>
                        <PortifolioItemImageCta className="portifolio_item-cta">
                            <a href="https://github.com/michaeldouglasf" className='btn' >Github</a>
                            <a href="https://mexican.surge.sh/login" className='btn btn-primary' target='_blank'>Live Demo</a>
                       </PortifolioItemImageCta>
                </PortifolioItem>
                <PortifolioItem className='portifolio__items'>
                    <PortifolioItemImatge className="portifolio__item-image">
                        <img src={MEGA_SENA} alt='future eats'/>
                    </PortifolioItemImatge>
                        <h3>This is a portifolio item title</h3>
                        <PortifolioItemImageCta className="portifolio_item-cta">
                            <a href="https://github.com/michaeldouglasf" className='btn' >Github</a>
                            <a href="https://mexican.surge.sh/login" className='btn btn-primary' target='_blank'>Live Demo</a>
                       </PortifolioItemImageCta>
                </PortifolioItem>
                <PortifolioItem className='portifolio__items'>
                    <PortifolioItemImatge className="portifolio__item-image">
                        <img src={POKEDEX} alt='future eats'/>
                    </PortifolioItemImatge>
                        <h3>This is a portifolio item title</h3>
                        <PortifolioItemImageCta className="portifolio_item-cta">
                            <a href="https://github.com/michaeldouglasf" className='btn' >Github</a>
                            <a href="https://mexican.surge.sh/login" className='btn btn-primary' target='_blank'>Live Demo</a>
                       </PortifolioItemImageCta>
                </PortifolioItem>
                <PortifolioItem className='portifolio__items'>
                    <PortifolioItemImatge className="portifolio__item-image">
                        <img src={MEGA_SENA} alt='future eats' />
                    </PortifolioItemImatge>
                        <h3>This is a portifolio item title</h3>
                        <PortifolioItemImageCta className="portifolio_item-cta">
                            <a href="https://github.com/michaeldouglasf" className='btn' >Github</a>
                            <a href="https://mexican.surge.sh/login" className='btn btn-primary' target='_blank'>Live Demo</a>
                       </PortifolioItemImageCta>
                </PortifolioItem>
                
                
                
            </PortifolioContainer>
        </section>
    );
};

export default Portifolio;