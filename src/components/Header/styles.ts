import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 6rem;
    padding: 1rem 18rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 280px) and (max-width: 560px){
        padding: 1rem;
    }

    @media (min-width: 561px) and (max-width: 734px){
        padding: 1rem 0 1rem 4rem;
        gap: 25rem;
    }

    @media (min-width: 735px) and (max-width: 978px){
        padding: 1rem 6rem 1rem 5rem;
        gap: 27rem;
    }

    @media (min-width: 980px) and (max-width: 1196px){
       gap: 44.5rem;
    }

    @media (min-width: 979px) and (max-width: 1440px){
        padding: 1rem 8rem;
    }
    @media (min-width: 1600px){
        padding: 1rem 10rem;
    }
    @media (min-width: 1920px){
        padding: 1rem 12rem;
    }
    @media (min-width: 2560px){
        padding: 1rem 15.8rem;
    }
`

export const Logo = styled.div`
    display: flex;
`

export const Title = styled.h2`
    font-family: inherit;
    font-size: var(--text-lg);
    cursor: pointer;
`

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 3%;
`

export const ContentCart = styled.div`
    display: flex;
    gap: 1rem;
    align-items:  center;
`

export const HeadingBase = styled.h3`
    font-family: inherit;
    font-size: var(--text-sm);
    font-weight: 500;
    
    @media (max-width: 978px){
        display: none;
    }
`

export const HeadingSmall = styled.h6`
    font-family: inherit;
    font-size: var(--text-xs);
    font-weight: 200;
    text-align: right;
    width: 100%;
`

export const CartIconContainer = styled.div`
    display: flex;
    padding-top: 8.2%;

    svg{
        cursor: pointer;
    }

    @media (max-width: 560px){
        padding-top: 0;
    }
`