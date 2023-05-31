
import { Box, Dialog, styled } from '@mui/material';
import Menu from './menu/Menu';
import EmptyChat from './conversation/EmptyChat';
import ChatBox from './conversation/ChatBox';
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';


const Component = styled(Box)`
    display:flex;

`;

const LeftComponent = styled(Box)`
min-width:30rem

`;

const RightComponent = styled(Box)`
width: 75%;
min-width: 20rem;
height: 100%;
border-left: 1px solid rgba(0, 0, 0, 0.14);

`

function ChatDialog(){
    const { person } = useContext(AccountContext)

    const dialogStyle = {
        height: '98%',
        width: '100%',
        marginTop: '4%',
        maxWidth: '100%',
        maxHeight: '100%',
        overflow: 'none',
        
        '@media (max-width: 1024px)': {
          width: '90%',
          marginTop: '10%',
        },
        
        '@media (max-width: 768px)': {
          width: '100%',
          height: '100%',
          margin: 0,
        },
      };
    return(
        <Dialog
                open={true}
                PaperProps={{ sx: dialogStyle }}
                hideBackdrop={true}
            >
                <Component>
                    <LeftComponent>
                        <Menu />
                    </LeftComponent>
                    <RightComponent>
                        {
                            Object.keys(person).length ? <ChatBox /> : <EmptyChat /> 
                        }
                        
                    </RightComponent>
                </Component>

        </Dialog>
    );


}

export default ChatDialog