import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 16%;
`

export const SpinnerContainer = styled.div`
    @keyframes spin {
        0%{
            transform: rotate(0);
        }
        50%{
            transform: rotate(145deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    width: 80px;
    height: 80px;
    padding: 4px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: var(--light);
    animation: spin .8s linear infinite;
    background: linear-gradient(0deg, var(--light) 33%, rgba(63, 249, 220, 0.1) 100%);
`

export const Circle = styled.div`
    width: 100%;
    height: 100%;
    background: var(--dark);
    border-radius: 50%;
`