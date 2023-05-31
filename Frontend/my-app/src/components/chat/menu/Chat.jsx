import { Box, Typography, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { setConversation} from '../../../service/api'

const Component = styled(Box)`
    display:flex;
    height:45px;
    padding: 1rem 0px;
    cursor: pointer;
`;

const Image = styled('img')({
    width:50,
    height:50,
    padding: '0 1rem',
    borderRadius:'50%',
    objectFit:'cover',
})


const Chats = ({user}) => {
    console.log(user);
    const { setPerson, account } = useContext(AccountContext)
    const getUser = async() => {
        setPerson(user);
        await setConversation({senderId: account.id, recieverId:user.id});
        
    }
    return (
        <Component onClick={()=>getUser()} >
            <Box>
                <Image src={user.picture} alt="userPhoto" />
            </Box>
            <Box>
                <Typography >{user.name} </Typography>
            </Box>

        </Component>
    )
}

export default Chats;