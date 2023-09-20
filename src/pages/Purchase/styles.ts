import { styled } from "styled-components";

export const Container = styled.div`
    background-color: #FFF;
    color: var(--dark);
    border-radius: 0.3rem;
    width: 81%;
    height: 80vh;
    margin: 1% auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{
        font-weight: 700;
        font-size: var(--text-md);
        text-align: center;
    }
    h2,
    hr{
        padding-bottom: 2.5rem;
    }
    hr{
        background: var(--dark);
        width: 50%;
        padding: 0.5px;
        margin: 1rem auto;
    }
    button{
        width: 16%;

        @media (max-width: 1196px){
            width: 50%;
        }
    }
    @media (max-width: 560px){
        img{
            width: 50%;
        }
    }
`