import styled from "styled-components";

export const Navi = styled.nav`
background: rgba(0 ,0 ,0 , 0.3);
width: max-content;
display: block;
padding: 0.7rem  1.7rem;
z-index: 2;
position: fixed;
left: 50%;
transform: translateX(-50%);
bottom: 2rem;
display: flex;
gap: 0.8 rem;
border-radius: 3rem;
backdrop-filter: blur(15px);
a{
    background: transparent;
    padding: 0.9em;
    border-radius: 50%;
    display: flex;
    color: var(--color-light);
    font-size: 1.1rem;
}
a:hover {
    background:rgba(0 ,0 ,0 , 0.32) ;
}
a.active {
    background: var(--color-primary);
    color: var(--color-white);
}

`;
