import { Box, Dialog, styled, List, ListItem, Typography } from '@mui/material';
import { qrCodeImage } from '../../constants/data';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';
import addUser from '../../service/api';
const Component = styled(Box)`
  display: flex;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Container = styled(Box)`
  padding: 4rem 10rem 20rem 7rem;
  
  @media (max-width: 768px) {
    padding: 2rem 5rem 10rem 3rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 2rem 5rem 1rem;
  }
`;

const QrCode = styled('img')`
  width: 350px;
  height: 350px;
  margin: 50px 0 0 50px;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    margin: 0;
    align-self: center;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;

const Title = styled(Typography)`
  font-size: 26px;
  font-family: inherit;
  font-weight: 300;
  color: #525252;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const dialogStyle = {
  height: '95%',
  width: '77%',
  marginTop: '15%',
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


function LoginDialog() {

    const {setAccount} = useContext(AccountContext)

    const handleSuccess = async(res) => {
        const decode = jwt_decode(res.credential);
        setAccount(decode);
        await addUser(decode);
        console.log(decode);

    }
    const handleError = (res) => {
        console.log(res);
    }

    return (
        <div>
            <Dialog
                open={true}
                PaperProps={{ sx: dialogStyle }}
                hideBackdrop={true}
            >
                <Component>
                    <Container>
                        <Title>Use WhatsApp on your computer</Title>
                        <List>
                            <ListItem>1. Open WhatsApp on your phone</ListItem>
                            <ListItem>2. Tap On Link a device</ListItem>
                            <ListItem>3. Point your phone to this screen to capture the QR code</ListItem>
                        </List>

                    </Container>
                    <Box style={{position: 'relative' ,display: 'flex', justifyContent: 'center'}}>
                        <QrCode src={qrCodeImage} alt='qrCode' />
                        <Box style={{position: 'absolute', top: '70%',transform:'translatex(25%)' }}>
                        <GoogleLogin
                            onSuccess={handleSuccess}
                            onError={handleError}
                        >

                        </GoogleLogin>
                        </Box>
                    </Box>
                </Component>
            </Dialog>
        </div>
    );
}

export default LoginDialog