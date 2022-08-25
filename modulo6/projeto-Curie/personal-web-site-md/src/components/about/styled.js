import styled from "styled-components";
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;

 @media screen and (max-width:600px){
    
        width: 65%;
        margin: 0 auto 3rem;
    }

      @media screen and (max-width:1024px){
   
        grid-template-columns: 1fr;
        gap: 0;

    }
  
`;
export const AboutMe = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(
    45deg,
    transparent,
    var(--color-light),
    transparent
  );
  display: grid;
  place-items: center;

 @media screen and (max-width:600px){
    
    width: 65%;
    margin: 0 auto 3rem;
}
@media screen and (max-width:1024px){
   
        width: 50%;
        margin: 2rem auto 4rem;
    }
`;
export const AboutMeImage = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  transform: rotate(10deg);
  transition: var(--transition);

  :hover {
    transform: rotate(0);
  }
`;

export const AboutContent = styled.div`
  margin: 2rem 0 2.6rem;
  color: var(--color-light);
  @media screen and (max-width:600px){
        text-align: center;
        margin: 1.5rem 0;    
    }
    @media screen and (max-width:1024px){
     p {
        margin:  1rem 0 1.5rem;

    }
}
`;
export const AboutCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media screen and (max-width:600px){

        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
`;
export const AboutCard = styled.div`
  background: var(--color-bg-variant);
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: var(--transition);
  :hover {
    background: transparent;
    border-color: var(--color-prmary-variant);
    cursor: default;
  }
`;
export const FaAwards = styled(FaAward)`
  color:var(--color-prmary) ;
    font-size: 1.4rem;
    margin-bottom:1rem;
    h5 {
    font-size: 0.95rem;

}
 small {
    font-size: 0.7rem;
    color: var(--color-light);
}
 p {
    margin: 2rem 0 2.6rem;
    color: var(--color-light);

} 
`
export const FiUser = styled(FiUsers)`
  color:var(--color-prmary) ;
    font-size: 1.4rem;
    margin-bottom:1rem;
    h5 {
    font-size: 0.95rem;

}
 small {
    font-size: 0.7rem;
    color: var(--color-light);
}
 p {
    margin: 2rem 0 2.6rem;
    color: var(--color-light);

} 
`
export const VscFolderLibrarys = styled(VscFolderLibrary)`
  color:var(--color-prmary) ;
    font-size: 1.4rem;
    margin-bottom:1rem;
    h5 {
    font-size: 0.95rem;

}
 small {
    font-size: 0.7rem;
    color: var(--color-light);
}
 p {
    margin: 2rem 0 2.6rem;
    color: var(--color-light);

} 
`
