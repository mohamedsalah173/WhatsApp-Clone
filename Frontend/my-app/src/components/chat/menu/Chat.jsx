import { Box, Typography, styled } from "@mui/material";

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


    return (
        <Component>
            <Box>
                <Image src={user.picture} alt="userPhoto" />
            </Box>
            <Box>
                <Typography>{user.name}</Typography>
            </Box>

        </Component>
    )
}

export default Chats;