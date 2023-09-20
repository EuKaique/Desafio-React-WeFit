import { styled } from "styled-components";

export const Container = styled.div`
    background-color: #FFF;
    border-radius: 0.4rem;
    min-width: 20em;
    max-width: 30em;
    min-height: 20em;
    max-height: 25em;
    padding: 1rem;

    @media (max-width: 560px){
        max-height: 30em;
        max-width: 33em;
    }
`

export const Box = styled.div`
    display: flex;
    justify-content: center;
`

export const Image = styled.img`
    width: 50%;
`

export const InfoMovie = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 0.1rem;
    padding: 0.6rem 0;
`
export const Title = styled.h5`
    font-weight: 700;
    font-size: var(--text-sm);
    color: var(--textPrimary);
`

export const Price = styled.h3`
    font-weight: 700;
    font-size: var(--text-md);
    color: var(--textPrimary);
`