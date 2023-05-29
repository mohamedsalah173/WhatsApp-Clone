import { Box, Typography, styled } from "@mui/material"
import { emptyChatImage } from "../../../constants/data"


const Component = styled(Box)`

background:#f8f9fa;
padding: 30px 0;
text-align: center;
height : 100%;

`;

const Container = styled(Box)`

padding: 0 12rem;

`

const Image = styled('img')({
    width: 450,
    marginTop:100,

});

const Title = styled(Typography)`
    font-size: 3rem;
    margin: 2rem 0 1rem 0;
    font-family: inherit;
    font-weight:300;
    color: #41525d
`

const Conversation = ()=>{


    return(
        <Component>
            <Container>
                <Image src={emptyChatImage} alt="emptyChat" />
                <Title>WhatsApp Web</Title>
                <Typography>Now send and recieve message without keep your phone online</Typography>

            </Container>

        </Component>
    )
}

export default Conversation