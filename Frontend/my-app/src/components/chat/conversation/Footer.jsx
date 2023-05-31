import { Box, InputBase, styled } from "@mui/material";
import { EmojiEmotionsOutlined, AttachFile, Mic } from '@mui/icons-material/';




const Container = styled(Box)`
    height: 60px;
    background: #ededed;

    display: flex;
    align-items: center;
    padding: 0 15px;
    &  > * {
        margin: 5px;
        color: #919191;
    }
`;
const Search = styled(Box)`
    border-radius: 18px;
    background-color: #FFFFFF;
    width: calc(96% - 100px);
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 1rem;
    padding-left: 1rem;
    font-size: 14px;
    height: 20px;
    width: 100%;
`;
const ClipIcon = styled(AttachFile)`
    transform: 'rotate(40deg)'
`;
const Footer = () => {


    return (
        <Container>
            <EmojiEmotionsOutlined />
            <ClipIcon />
            <Search>
                <InputField
                    placeholder="type a message"

                />
            </Search>
            <Mic />
        </Container>

    )
}

export default Footer;
