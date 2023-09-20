import { ButtonProps } from "../../@types/types";
import { Box, ButtonContent, ItemsContainer, TextContainer } from "./styles";

export function Button(props: ButtonProps){
    return (
        <ButtonContent background={props.color} onClick={props.onClick}>
            {props.content ? 
                <Box>
                    <ItemsContainer>
                        {props.icon}
                        {props.item}
                    </ItemsContainer>
                    <TextContainer>{props.text}</TextContainer>
                </Box>
                :
                <Box>
                    <TextContainer>{props.text}</TextContainer>
                </Box>
            }
        </ButtonContent>
    )

}