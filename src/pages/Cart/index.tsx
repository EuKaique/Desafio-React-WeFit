import { Header } from "../../components/Header";
import { Container, ContainerProducts, DetailsContent, FooterContainer, TopContent } from "./styles";
import NotFoundImage from '../../assets/images/not-found.png';
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../global/useCartStore";
import { LessIcon } from "../../assets/icons/LessIcon";
import { MoreIcon } from "../../assets/icons/MoreIcon";
import { TrashIcon } from "../../assets/icons/TrashIcon";
import { formatPrice } from "../../utils/formatPrice";

export function Cart(){
    const screen = window.innerWidth
    const navigate = useNavigate()
    const { clearCart, removeFromCart, updateItemQuantity, cartItems } = useCartStore()

    const uniqueCartItems = (items: any) => {
        let uniqueItems: any[] = [];
      
        items.forEach((item: any) => {
          if (!uniqueItems.some((uniqueItem: any) => uniqueItem.id === item.id)) {
            uniqueItems.push(item);
          }
        });
      
        return uniqueItems;
    };
    const uniqueItems = uniqueCartItems(cartItems)

    const handleAddQuantity = (itemId: number) => {
        const cartItem = cartItems.find((item) => item.id === itemId);
        if (cartItem) {
          const newQuantity = cartItem.quantity + 1;
          updateItemQuantity(cartItem.id, newQuantity);
        }
    }
    const handleRemoveQuantity = (itemId: number) => {
        const cartItem = cartItems.find((item) => item.id === itemId);
        if (cartItem) {
            if (cartItem.quantity > 1) {
                const newQuantity = cartItem.quantity - 1;
                updateItemQuantity(cartItem.id, newQuantity);
            }
        }
    }

    const handleRemoveItem = (itemId: number) => {
        removeFromCart(itemId);
    }

    const calculateTotalPrice = () => {
        let total = 0;
        for (const item of cartItems) {
            total += item.price * item.quantity;
        }
        return total;
    }
        
    return(
        <>
            <Header />
            {cartItems.length >= 1 ?
                <ContainerProducts>
                    <TopContent>
                        <h3>Produto</h3>
                        <h3>Qtd</h3>
                        <h3>Subtotal</h3>
                    </TopContent>
                    {uniqueItems?.map((item: any) => (
                        <DetailsContent key={item.id}>
                            {/* Desktop */}
                            <div className="desktop">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="info-product desktop">
                                <h6>{item.title}</h6>
                                <h4>{formatPrice(item.price)}</h4>
                            </div>
                            <div className="info-quantity desktop">
                                <button onClick={() => handleRemoveQuantity(item.id)}><LessIcon /></button>
                                <input type="text" id={item.id} value={item.quantity} readOnly/>
                                <button onClick={() => handleAddQuantity(item.id)}><MoreIcon /></button>
                            </div>
                            <div className="info-price desktop">
                                <h3>{formatPrice(item.price * item.quantity)}</h3>
                            </div>
                            <div className="trash-class desktop">
                                <TrashIcon onClick={() => handleRemoveItem(item.id)}/>
                            </div>
                            {/* Mobile */}
                            <div className="mobile info-mobile-content">
                                <div className="left-content-mobile">
                                    <div>
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="left-content-info-mobile">
                                        <div>
                                            <h6>{item.title}</h6>
                                        </div>
                                        <div className="info-quantity-mobile">
                                            <button onClick={() => handleRemoveQuantity(item.id)}><LessIcon /></button>
                                            <input type="text" id={item.id} value={item.quantity} readOnly/>
                                            <button onClick={() => handleAddQuantity(item.id)}><MoreIcon /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-content-mobile mobile">
                                <div>
                                    <div className="info-product-mobile">
                                        <div>
                                            <h4>{formatPrice(item.price)}</h4>
                                        </div>
                                        <div className="trash-class-mobile mobile">
                                            <TrashIcon onClick={() => handleRemoveItem(item.id)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="subtotal-container">
                                    <div>
                                        <span className="subtotal-class">Subtotal</span>
                                    </div>
                                    <div className="info-price-mobile mobile">
                                        <h3>{formatPrice(item.price * item.quantity)}</h3>
                                    </div>
                                </div>
                            </div>
                        </DetailsContent>
                    ))}
                    <hr />
                    <FooterContainer>
                        {screen >= 725 ?
                            <>
                                <div>
                                    <Button 
                                        content={false} 
                                        text="finalizar pedido" 
                                        color="blue"
                                        onClick={() => {
                                            clearCart()
                                            navigate('/purchase')
                                        }}
                                    />
                                </div>
                                <div>
                                    <span className="total-text">Total</span>
                                    <span className="total-price">{formatPrice(calculateTotalPrice())}</span>
                                </div>
                            </>
                            :
                            <>
                                <div className="button-container">
                                    <Button 
                                        content={false} 
                                        text="finalizar pedido" 
                                        color="blue"
                                        onClick={() => {
                                            clearCart()
                                            navigate('/purchase')
                                        }}
                                    />
                                </div>
                                <div className="divider-total-info-class">
                                    <span className="total-text">Total</span>
                                    <span className="total-price">{formatPrice(calculateTotalPrice())}</span>
                                </div>
                                <div className="divider-class"></div>
                            </>
                        }
                    </FooterContainer>
                </ContainerProducts>
             :
                <Container>
                    <h2>Parece que não há nada por aqui :(</h2>
                    <img src={NotFoundImage} alt="Parece que não há nada por aqui" />
                    <hr />
                    <Button content={false} onClick={() => navigate('/')} color="blue" text="VOLTAR"/>
                </Container>
            }
        </>
    )
}