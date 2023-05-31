import { Box, Typography, styled } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { defaultProfilePicture } from "../../../constants/data";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
const Header = styled(Box)`
    height:55px;
    background: #ededed;
    padding: '0.5rem 1rem';
    display: flex;
    align-items:center;
`;

const Image = styled('img')({
    marginLeft:'0.4rem',
    height:40,
    width: 40,
    borderRadius:'50%',
    objectFit:'cover',
})

const Title = styled(Typography)`

    margin-left: 1rem !important

`;
const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
        padding: 8px;
        font-size: 22px;
        color: #000;
    }
`;

const Status = styled(Typography)`
    margin-left: 1rem !important;
    font-size: 1rem;
    color: rgb(0, 0, 0, 0.6)


`



const ChatHeader = ({person})=>{
    // const {person} = useContext(AccountContext);
    console.log(person);

    return(

        <Header>
            <Image src={person.picture} alt="userProfile" />
            <Box>
                <Title>{person.name}</Title>
                <Status>online State</Status>
            </Box>
            <RightContainer>
                <MoreVert />
            </RightContainer>
        </Header>
    )
}

export default ChatHeader;