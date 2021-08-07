import { AppBar, Toolbar, Box, Avatar, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/slices/themeHook';
import { toggleTheme } from '../../redux/slices/themeSlice';
import useStyles from './Header.styles';

const Header = () => {
    const classes = useStyles();
    const dispatch = useAppDispatch();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar}>
                <Toolbar className={classes.toolbar} disableGutters={true}>
                    <Link to='/'>
                        <Box
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                            position='absolute'
                            top='0'
                            left='0'
                            className={classes.box}
                        >
                            <img
                                src='./images/logo.svg'
                                alt='logo'
                                width='28'
                                height='26'
                                style={{ zIndex: 10 }}
                            />
                            <Box
                                position='absolute'
                                bottom='0'
                                right='0'
                                className={classes.boxBottom}
                            />
                        </Box>
                    </Link>
                    <Box flexGrow={1} />
                    <Box>
                        <IconButton onClick={() => dispatch(toggleTheme())}>
                            <img src='./images/icon-sun.svg' alt='mode' />
                        </IconButton>
                    </Box>
                    <Box m={2}>
                        <Avatar
                            src='./images/avatar.png'
                            alt='avatar'
                            className={classes.avatar}
                        />
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
