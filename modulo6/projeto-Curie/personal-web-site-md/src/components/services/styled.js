import styled from "styled-components";
import { BiCheck } from "react-icons/bi";

export const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const Service = styled.article`
  background: var(--color-bg-variant);
  border-radius: 0 0 2rem 2rem;
  border: 1px solid var(--color-primary);
  height: fit-content;
  transition: var(--transition);
  :hover {
    background: transparent;
    background-color: var(--color-variant);
    cursor: default;
  }
  @media screen and (max-width: 1024px) {
    height: auto;
  }
`;
export const ServiceHead = styled.div`
  background: var(--color-primary);
  padding: 2rem;
  border-radius: 0 0 2rem 2rem;
  box-shadow: 0 2rem 1rem rgba(0, 0, 0, 0, 1);
`;
export const ServiceList = styled.div`
  padding: 2rem;
  li {
    display: flex;
    gap: 1rem;
    margin-bottom: 0.8rem;
  }
`;
export const ServiceListIcon = styled(BiCheck)`
  color: var(--color-primary);
  margin-top: 2rem;
  p {
    font-size: 0.9rem;
  }
`;
