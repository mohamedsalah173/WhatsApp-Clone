import { AppBar, Toolbar, styled } from '@mui/material';
import LoginDialog from './account/loginDialog';
import { useContext } from 'react';
import ChatDialog from './chat/ChatDialog';
import { AccountContext } from './context/AccountProvider';


const LoginHeader = styled(AppBar)`
    height:200px;
    background-color:#00bfa5;
    
`
function Messenger() {
    const { account } = useContext(AccountContext);

    return (
        <>
            {
                account ?
                    <>
                        <LoginHeader>
                            <Toolbar>

                            </Toolbar>
                        </LoginHeader>
                        <ChatDialog />
                    </>
                    :
                    <>
                        <LoginHeader>
                            <Toolbar>

                            </Toolbar>
                        </LoginHeader>
                        <LoginDialog />
                    </>
            }
        </>
    );
}

export default Messenger;
