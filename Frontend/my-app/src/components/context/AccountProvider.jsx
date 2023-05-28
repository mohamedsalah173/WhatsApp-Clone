

import { createContext, useState } from "react";

export const AccountContext = createContext(null);

function AccountProvider(props){

    const[account, setAccount] = useState();

    return(
        <AccountContext.Provider value={{
            account,
            setAccount
        }}>
            {props.children}

        </AccountContext.Provider>
    )
}

export default AccountProvider