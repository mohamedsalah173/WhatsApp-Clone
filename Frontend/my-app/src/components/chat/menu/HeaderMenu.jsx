
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MenuItem, Menu } from '@mui/material';
import { useState, useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';


function HeaderMenu() {
    const {setAccount} = useContext(AccountContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setAccount(null)
    };

    return (
        <>

            <MoreVertIcon
                onClick={handleClick}
            />
            <Menu
                anchorEl={anchorEl}
                open={open}
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