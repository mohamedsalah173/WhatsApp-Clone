
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MenuItem, Menu } from '@mui/material';
import { useState, useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';


function HeaderMenu() {
    const {setAccount} = useContext(AccountContext)
    const [open, setOpen] = useState(null);
    const isOpen = Boolean(open);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };
    const handleClose = () => {
        setOpen(null);
    };

    return (
        <>

            <MoreVertIcon
                onClick={handleClick}
            />
            <Menu
                anchorEl={open}
                open={open}
                keepMounted
                onClose={handleClose}
                transformOrigin={{
                    vertical:'top',
                    horizontal:'right'

                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </>
    );
}


export default HeaderMenu