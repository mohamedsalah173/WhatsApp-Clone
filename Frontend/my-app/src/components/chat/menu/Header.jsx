

import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import HeaderMenu from "./HeaderMenu";



const Component = styled(Box)`
    height: 55px;
    background-color: #ededed;
    display: flex;
    align-item: center

`;
const Wrapper = styled(Box)`
    margin-top: 5px;
    margin-left:auto;
    margin-right:4px;
    justify-content: right;

`

const Image = styled('img')({
    paddingTop: 3,
    paddingLeft: 3,
    width: 45,
    height: 45,
    borderRadius: '50%'
})
const Header = () => {
    const { account } = useContext(AccountContext);

    return (
        <Component>
            <Image src={account.picture} alt="userProfile" />
            <Wrapper>
              <HeaderMenu />  
            </Wrapper>
        </Component>
    )
}

export default Header;
