import { Box, Typography } from "@mui/material"
import { emptyChatImage } from "../../../constants/data"



const Conversation = ()=>{


    return(
        <Box>
            <Box>
                <img src={emptyChatImage} alt="emptyChat" />
                <Typography>WhatsApp Web</Typography>
                <Typography>Now send and recieve message without keep your phone online</Typography>

            </Box>

        </Box>
    )
}

export default Conversation