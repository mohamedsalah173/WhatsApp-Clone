import Messenges from "./Messages";

import { Box } from "@mui/material";
import ChatHeader from './ChatHeader'
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";




const ChatBox = ()=>{
    const {person} = useContext(AccountContext);


    return(
        <Box style={{height:'75%'}}>

            <ChatHeader person={person}/>
            <Messenges person={person}/>

        </Box>
    )
}

export default ChatBox;