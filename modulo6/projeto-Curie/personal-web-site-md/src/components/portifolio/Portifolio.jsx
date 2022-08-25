import React from "react";
import FUTURE from "../../assets/FUTURE.png";
import MEXICAN_FOOD from "../../assets/mexican_food.png";
import POKEDEX from "../../assets/pokedex.png";
import TMDB from "../../assets/tmdb_movie.png";
import MEGA_SENA from "../../assets/mega_sena.png";
import LABEDDIT from "../../assets/labeddit.png";
import {
  PortifolioContainer,
  PortifolioItem,
  PortifolioItemImageCta,
  PortifolioItemImatge,
  PortifolioItemImatgeCta,
} from "./styled";

const Portifolio = () => {
  return (
    <section id="portifolio">
      <h5>My Recent Work</h5>
      <h2>Portifolio</h2>
      <PortifolioContainer className="container ">
        <PortifolioItem>
          <PortifolioItemImatge>
            <img src={FUTURE} alt="future eats" />
          </PortifolioItemImatge>
          <h3>FutureEats</h3>
          <PortifolioItemImageCta className="portifolio_item-cta">
            <a href="https://github.com/michaeldouglasf/LabeFood" target="_blank" className="btn">
              Github
            </a>
            <a href="https://labefood5-shaw.surge.sh/login" className="btn btn-primary" target="_blank"
            >
              Live Demo
            </a>
          </PortifolioItemImageCta>
        </PortifolioItem>
        <PortifolioItem className="portifolio__items">
          <PortifolioItemImatge className="portifolio__item-image">
            <img src={MEXICAN_FOOD} alt="MEXICAN_FOOD" />
          </PortifolioItemImatge>
          <h3>Mexican Food</h3>
          <PortifolioItemImageCta className="portifolio_item-cta">
            <a href="https://github.com/michaeldouglasf/mexican-front-end" target="_blank" className="btn">
              Github
            </a>
            <a
              href="https://mexican.surge.sh/login"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </PortifolioItemImageCta>
        </PortifolioItem>
        <PortifolioItem className="portifolio__items">
          <PortifolioItemImatge className="portifolio__item-image">
            <img src={TMDB} alt="TMDB" />
          </PortifolioItemImatge>
          <h3>LabeMovie</h3>
          <PortifolioItemImageCta className="portifolio_item-cta">
            <a href="https://github.com/michaeldouglasf/promobit" target="_blank" className="btn">
              Github
            </a>
            <a
              href="https://promobit-mike.surge.sh/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </PortifolioItemImageCta>
        </PortifolioItem>
        <PortifolioItem className="portifolio__items">
          <PortifolioItemImatge className="portifolio__item-image">
            <img src={MEGA_SENA} alt="MEGA_SENA" />
          </PortifolioItemImatge>
          <h3>Mega Sena</h3>
          <PortifolioItemImageCta className="portifolio_item-cta">
            <a href="https://github.com/future4code/shaw-Michael-Marcelino/tree/master/modulo6/rodada-cases-semana-4" target="_blank" className="btn">
              Github
            </a>
            <a
              href="https://brainn-mike.surge.sh/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </PortifolioItemImageCta>
        </PortifolioItem>
        <PortifolioItem className="portifolio__items">
          <PortifolioItemImatge className="portifolio__item-image">
            <img src={POKEDEX} alt="future eats" />
          </PortifolioItemImatge>
          <h3>Pokedex</h3>
          <PortifolioItemImageCta className="portifolio_item-cta">
            <a href="https://github.com/michaeldouglasf/shaw-pokedex" target="_blank" className="btn">
              Github
            </a>
            <a
              href="https://pokedex-grupo10.surge.sh/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </PortifolioItemImageCta>
        </PortifolioItem>
        <PortifolioItem className="portifolio__items">
          <PortifolioItemImatge className="portifolio__item-image">
            <img src={LABEDDIT} alt="future eats" />
          </PortifolioItemImatge>
          <h3>LabEddit</h3>
          <PortifolioItemImageCta className="portifolio_item-cta">
            <a href="https://github.com/michaeldouglasf/LabEddit" target="_blank" className="btn">
              Github
            </a>
            <a
              href="https://labeddit-michael.surge.sh/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </PortifolioItemImageCta>
        </PortifolioItem>
      </PortifolioContainer>
    </section>
  );
};

export default Portifolio;
