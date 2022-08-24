import styled from "styled-components";

export const PortifolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  @media screen and (max-width:600px){
        grid-template-columns:  1fr ;
        gap: 1rem;
    }
    @media screen and (max-width:1024px){
        grid-template-columns:  1fr 1fr;
        gap: 1.2rem;
    }
`;

export const PortifolioItem = styled.article`
  background: var(--color-bg-variant);
  padding: 1.3rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);

  :hover {
    border-color: var(--color-primary-variant);
    background: transparent;
  }
`;
export const PortifolioItemImatge = styled.div`
  border-radius: 1.5rem;
    overflow: hidden;
    h3 {
    margin:  3.2rem 0 2rem;
}
`;
export const PortifolioItemImageCta = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
`;