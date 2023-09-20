import { useNavigate } from "react-router-dom";
import { CartIcon } from "../../assets/icons/CartIcon";
import useCartStore from "../../global/useCartStore";
import { CartContainer, CartIconContainer, Container, ContentCart, HeadingBase, HeadingSmall, Logo, Title } from "./styles";

export function Header(){
    const navigate = useNavigate()

    const { cartItems } = useCartStore()
    const items = cartItems.length

    return(
        <Container>
            <Logo>
                <Title onClick={() => navigate('/')}>WeMovies</Title>
            </Logo>
            <ContentCart>
                <CartContainer>
                    <HeadingBase>Meu Carrinho</HeadingBase>
                    <HeadingSmall>
                        {items >= 1 ? items : 0}
                        {items === 1 ? ' item' : ' itens'}
                    </HeadingSmall>
                </CartContainer>
                <CartIconContainer>
                    <CartIcon onClick={() => navigate('/cart')}/>
                </CartIconContainer>
            </ContentCart>
        </Container>
    )
}