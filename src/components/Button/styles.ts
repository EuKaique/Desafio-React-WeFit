import { styled } from "styled-components";

export const ButtonContent = styled.button<{ background: string }>`
    background-color: ${props => props.background === 'blue' ? 'var(--primary)' : 'var(--success)'};
    border: none;
    border-radius: 0.4rem;
    width: 100%;
    cursor: pointer;

    &:hover{
        background-color: ${props => props.background === 'blue' ? 'var(--primaryDark)' : 'var(--successDark)'};
        transition: .2s;
    }
`

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem 3rem;

    @media (max-width: 560px){
        padding: 1rem auto;
        font-size: var(--text-xs);  
    }
`

export const ItemsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: #FFF;
`

export const TextContainer = styled.div`
    text-transform: uppercase;
    color: #FFF;
    font-size: var(--text-sm);
    font-weight: 600;
    width: 100%;
`