import styled from "styled-components";

export const HeaderSoc = styled.header`
  height: 100vh;
  padding-top: 7rem;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    height: 100vh;
  }
  @media screen and (max-width: 1024px) {
    height: 68vh;
  }
`;
export const HeaderContainer = styled.div`
  text-align: center;
  height: 100%;
  position: relative;
`;
export const Cta = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 1.2rem;
  justify-content: center;
`;

export const HeaderSocials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  position: absolute;
  left: 0;
  bottom: 3rem;
  ::after {
    content: "";
    width: 1px;
    height: 2rem;
    background: var(--color-primary);
    @media screen and (max-width: 1024px) {
    display: none;
  }
  }
`;
export const Me = styled.div`
  background: linear-gradient(var(--color-primary), transparent);
  width: 23rem;
  height: 30rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 4rem;
  border-radius: 12rem 12rem 0 0;
  overflow: hidden;
  padding: 5rem 1.5rem 1.5rem 1.5rem;
  @media screen and (max-width: 600px) {
    width:auto;
    box-sizing: inherit;
  }
`;

export const ScroolDown = styled.a`
  position: absolute;
  right: -2.3rem;
  bottom: 5rem;
  transform: rotate(90deg);
  font-weight: 300;
  font-size: 0.9rem;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
