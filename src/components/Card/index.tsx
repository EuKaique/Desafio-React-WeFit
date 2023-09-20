import { CardProps } from "../../@types/types";
import { CartButton } from "../../assets/icons/CartButton";
import useCartStore from "../../global/useCartStore";
import { formatPrice } from "../../utils/formatPrice";
import { Button } from "../Button";
import { Box, Container, Image, InfoMovie, Price, Title } from "./styles";

export function Card(props: CardProps) {
  const { addToCart, cartItems } = useCartStore();

  const handleAddToCart = () => {
    const existingItem = cartItems.find((item) => item.id === props.id);

    if (existingItem) {
      existingItem.quantity += 1;
      addToCart(existingItem);
    } else {
      const newItem = {
        id: props.id,
        title: props.title,
        price: props.price,
        image: props.image,
        quantity: 1,
      };

      addToCart(newItem);
    }
  };

  const cartItem = cartItems.find((item) => item.id === props.id);

  return (
    <Container>
      <Box>
        <Image src={props.image} alt={props.title} />
      </Box>
      <InfoMovie>
        <Title>{props.title}</Title>
        <Price>{formatPrice(props.price)}</Price>
      </InfoMovie>
      <Button
        key={props.id}
        content
        color={cartItem ? "green" : "blue"} // Altere a cor com base na presença do item no carrinho
        icon={<CartButton />}
        item={cartItem ? cartItem.quantity : 0} // Exiba a quantidade do item se existir
        text={cartItem && cartItem.quantity >= 1 ? "Item adicionado" : "Adicionar ao Carrinho"}
        onClick={handleAddToCart}
      />
    </Container>
  );
}