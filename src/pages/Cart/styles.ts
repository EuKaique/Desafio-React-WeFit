import { styled } from "styled-components";

export const ContainerProducts = styled.div`
    background-color: #FFF;
    color: var(--dark);
    border-radius: 0.3rem;
    width: 81%;
    height: auto;
    margin: 1% auto;

    hr{
        height: 0.156em;
        background-color: var(--dark);
        width: 97%;
        margin: 2% auto;
        display: block;
    }

    @media (max-width: 724px){
        width: 90%;
        margin: auto;
        height: 100vh;

        hr{
            display: none;
        }
    }
`

export const TopContent = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 0.5fr 1fr;
    padding: 1rem;

    h3{
        text-transform: uppercase;
        font-size: var(--text-xs);
        font-weight: 700;
        color: var(--textSecondary);
    }

    @media (max-width: 724px){
        h3{
            display: none;
        }
    }
`

export const DetailsContent = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 1.5fr 0.7fr 0.35fr 1fr;
    padding: 0.5rem 1rem;

    @media (max-width: 724px){
        .mobile,
        .info-product-mobile,
        .info-quantity-mobile,
        .info-price-mobile,
        .trash-class-mobile{
            display: block !important;
        }
        .desktop,
        .info-product,
        .info-quantity,
        .info-price,
        .trash-class{
            display: none !important;
        }
        grid-template-columns: 1fr 0.5fr;
        img{
            width: 6rem;
        }
        .left-content-mobile{
            display: flex;
            gap: 1rem;
        }
        .left-content-info-mobile{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-bottom: 3rem;

            h6{
                font-size: var(--text-sm);
            }
        }
        .right-content-mobile {
            display: flex !important;
            flex-direction: column !important;
        }
        .subtotal-container{
            display: flex;
            flex-direction: column;
            align-items: end;
        }
        .subtotal-class{
            color: var(--textSecondary);
            font-size: var(--text-sm);
            font-weight: 700;
            text-transform: uppercase;
        }
        .info-quantity-mobile{
            display: flex !important;
            align-items: center;
            gap: 0.6em;
            height: 1.5rem;

            button{
                background-color: transparent;
                border: none;
                margin-top: 0.3rem;
                cursor: pointer;
            }

            button:first-child{
                margin-left: 0.3rem;
            }

            input{
                width: 30%;
                padding: 0.1rem;
                outline: none;
                border: 1px solid var(--borderGrey);
                border-radius: 0.2rem;
                padding: 0.2rem 0.5rem;
                color: var(--textPrimary);
            }

            svg{
                min-height: 1.6rem;
                min-width: 1.3rem;
            }
        }
        .info-mobile-content{
            display: flex !important;
            flex-direction: row;
            align-items: center;
            gap: 0.8em;
        }
        .info-product-mobile{
            display: flex !important;
            gap: 1rem;
            flex-direction: row;
            align-items: end;
            justify-content: flex-end;
            padding-top: 0;
            padding-bottom: 15%;
            h6{
                font-size: var(--text-sm);
                font-weight: 700;
            }
            h4{
                font-size: var(--text-base);
                font-weight: 700;
            }
        }
    }

    @media (min-width: 725px){
        .desktop,
        .info-product,
        .info-quantity,
        .info-price,
        .trash-class{
            display: block;
        }
        .mobile,
        .info-product-mobile,
        .info-quantity-mobile,
        .info-price-mobile,
        .trash-class-mobile{
            display: none;
        }
        img{
            width: 5.5rem;
        }
        .info-product{
            display: flex;
            flex-direction: column;
            align-items: start;
            padding-top: 9%;
            padding-left: 5%;
            gap: 0.3rem;
            color: var(--textPrimary);
    
            h6{
                font-size: var(--text-xs);
                font-weight: 700;
            }
            h4{
                font-size: var(--text-sm);
                font-weight: 700;
            }
        }
    
        .info-quantity{
            display: flex;
            align-items: center;
            padding-top: 26%;
            gap: 0.8rem !important;
            height: 1.5rem;
    
            button{
                background-color: transparent;
                border: none;
                margin-top: 0.3rem;
                cursor: pointer;
            }
    
            button:first-child{
                margin-left: 0.3rem;
            }
    
            input{
                width: 30%;
                padding: 0.1rem;
                outline: none;
                border: 1px solid var(--borderGrey);
                border-radius: 0.2rem;
                padding: 0.2rem 0.5rem;
                color: var(--textPrimary);
            }
        }
    
        .info-price{
            padding-top: 38%;
        }
    
        .trash-class{
            padding-top: 15%;
            padding-left: 90%;
    
            svg{
                cursor: pointer;
            }
        }
    }

`

export const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem 1.5rem 1rem;

    & > :last-child{
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .total-text{
        font-weight: 700;
        font-size: var(--text-sm);
        color: var(--textSecondary);
        text-transform: uppercase;
    }
    .total-price{
        font-weight: 700;
        font-size: var(--text-md);
        color: var(--textPrimary);
        text-transform: uppercase;
    }

    @media (max-width: 724px){
        display: flex;
        align-items: end;
        gap: 1rem;
        flex-direction: column-reverse;
        padding: 0 1rem 1.5rem 1rem;
        margin-top: 67vh;

        button{
            font-size: var(--text-md);
        }

        .divider-total-info-class{
            display: flex;
            align-items: center;
            gap: 3rem;
        }

        .divider-class{
            border: 0.12em solid var(--dark);
            width: 100%;
            margin-top: -9%;
            margin-bottom: 6%;
        }
        .button-container{
            width: 100%;
        }
        .total-text{
            font-size: var(--text-md);
        }
        .total-price{
            font-size: var(--text-xl);
        }
    }
`

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
`