import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: var(--color-primary);
  padding: 3rem 0;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 7rem;

  a {
    color: var(--color-bg);
    /* margin-bottom: 2rem; */
  }
`;

export const Par = styled.p`
    color: var(--color-bg);
    margin-bottom: 2rem;
`;
export const FooterLogo = styled.a`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
  display: inline-block;
`;
export const PermaLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto 3rem;
  @media screen and(max-width:600px) {
    a {
        display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  }
`;
export const FooterSocials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;

  a {
    background: var(--color-bg);
    color: var(--color-white);
    padding: 0.8rem;
    border-radius: 0.7rem;
    display: flex;
    border: 1px solid transparent;
  }
  :hoover {
    background: transparent;
    color: var(--color-bg);
    border: var(--color-bg);
  }
  @media screen and(max-width:600px) {
    margin-bottom:2.6rem ;
  }
`;

export const FooterCopyRight = styled.div`
  margin-bottom: 4rem;
  color: var(--color-bg);
`;
