
import { useContext, useEffect, useState } from "react";
import { getUsers } from "../../../service/api";
import Chat from "./Chat";
import { Box, styled } from "@mui/material";
import { AccountContext } from "../../context/AccountProvider";


const Component = styled(Box)`
    height: 81vh;
    overflow: overlay;
    width: 20rem;
`


const Chats = () => {
    const [users, setUsers] = useState([]);
    const { account } = useContext(AccountContext);
    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
            setUsers(response);
        }
        fetchData();
    }, []);

    return (
        <Component>
            {
                users?.map(user => (
                    user.sub !== account.sub &&
                    <Chat user={user} />
                ))
            }
        </Component>
    );

}

export default Chats;