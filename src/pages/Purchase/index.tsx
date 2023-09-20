import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container } from "./styles";
import PurchaseImage from '../../assets/images/purchase.png';
import { Header } from "../../components/Header";

export function Purchase(){
    const navigate = useNavigate()
    return(
        <>
            <Header />        
            <Container>
                <h2>Compra realizada com sucesso!</h2>
                <img src={PurchaseImage} alt="Compra realizada com sucesso!" />
                <hr />
                <Button content={false} onClick={() => navigate('/')} color="blue" text="VOLTAR"/>
            </Container>
        </>
    )
}