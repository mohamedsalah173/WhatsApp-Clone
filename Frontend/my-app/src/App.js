
import './App.css';
import Messenger from './components/messnger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './components/context/AccountProvider';


function App() {
  const clientId = '495203139500-s0v9pk9fo9m8ij7vifkjklf75rtg1r15.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>

        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
