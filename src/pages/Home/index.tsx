import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Spinner } from "../../components/Spinner";
import { Container, GridContainer } from "./styles";

export function Home(){
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<any[]>([])

    const baseUrl = window.location.href.split('3000')

    useEffect(() => {
        fetch(baseUrl[0] + '4000/products')
        .then((response) => response.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        })
        .catch((error) => console.error('Erro:', error));
        
    },[baseUrl])

    return(
        <>
            <Header />
            <Container>
                {loading ? <Spinner /> :
                    <GridContainer>
                        {
                            data.map(item => (
                                <Card 
                                    key={item?.id}
                                    image={item?.image}
                                    title={item?.title}
                                    price={item?.price}
                                    id={item?.id}
                                />
                            ))
                        }
                    </GridContainer>
                }
            </Container>
        </>
    )
}