

import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { Box } from "@mui/material";
import styled from "@emotion/styled";


const Component = styled(Box)`
    height: 55px;
    background-color: #ededed;

`;

const Image = styled('img')({
    paddingTop: 3,
    paddingLeft:3,
    width: 45,
    height: 45,
    borderRadius:'50%'
})
const Header = ()=>{
    const {account} = useContext(AccountContext);

    return(
        <Component>
            <Image src={account.picture} alt="userProfile" />
        </Component>
    )
}

export default Header;
