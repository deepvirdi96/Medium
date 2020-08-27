import React from 'react';
import { Avatar, Button, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    orange: {
        background: '#B10640',
        color: 'white'
    },
    blue: {
        background: '#230090',
        color: 'white'
    }
})

/**
 * TODO : add link to the menu buttons
 */
const AvatarMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="header__avatarMenu">
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <Avatar alt="Remy Sharp" src="/broken-image.jpg" className={classes.blue} />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorReference={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    );
}

export default AvatarMenu;
