import styled from "styled-components";
import { BiCheck } from "react-icons/bi";
import { BsFillPatchCheckFill } from "react-icons/bs";

export const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  > div {
    background: var(--color-bg-variant);
    padding: 2.4rem 5rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: var(--transition);
  }
  > div:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }
  > div h3 {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--color-primary);
  }

  @media screen and (max-width: 600px) {
    gap: 1rem;
    > div {
      width: 100%;
      padding: 2rem 1rem;
    }
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    > div {
      width: 80%;
      padding: 2rem;
      margin: 0 auto;
    }
  }
`;

export const ExperienceContent = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  @media screen and (max-width: 1024px) {
    padding: 1rem;
  }
`;
export const ExperiencDetails = styled.div`
  display: flex;
  gap: 1rem;
`;
export const ExperiencDetailsIcon = styled(BsFillPatchCheckFill)`
  margin-top: 6px;
  color: var(--color-primary);
`;
