import { styled } from "styled-components";

export const Container = styled.div`
    width: 80%;
    margin: 1% auto;

    @media (max-width: 560px){
        min-width: 100%;
        margin: 1% 0 1% 3%;
    }
`

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
    row-gap: 1rem;

    @media (max-width: 560px){
        grid-template-columns: 1fr;
    }

    @media (min-width: 561px) and (max-width: 978px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1920px){
        grid-template-columns: repeat(4, 1fr);
    }
    @media (min-width: 2560px){
        grid-template-columns: repeat(5, 1fr);
    }
`