import styled from "styled-components";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

export const ContactContainer = styled.div`
  width: 58%;
  display: grid;
  grid-template-columns: 30% 58%;
  gap: 12%;

  @media screen and (max-width: 600px) {
    width: var(--container-widht-sm);
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;
export const ContactOption = styled.div`
  background: var(--color-bg-variant);
  padding: 1.2rem;
  border-radius: 1.2rem;
  text-align: center;
  border: 1px solid transparent;
  transition: var(--transition);
  :hover {
    background: transparent;
    border-color: var(--color-primary-variant);
  }
  a {
    margin-top: 0.7rem;
    display: inline-block;
    font-size: 0.8rem;
  }
`;

export const ContactOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
export const MdOutlineEmailS = styled(MdOutlineEmail)`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;
export const RiMessengerLines = styled(RiMessengerLine)`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;
export const BsWhatsapps = styled(BsWhatsapp)`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  input,
  textarea {
    width: 100%;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background: transparent;
    border: 2px solid var(--color-primary-variant);
    resize: none;
    color: var(--color-variant);
  }
`;
