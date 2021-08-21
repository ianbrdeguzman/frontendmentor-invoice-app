import { Box, Typography } from '@material-ui/core';
import { useAppSelector } from '../../redux/store';
import useStyles from './Status.styles';

interface StatusProps {
    status: string | undefined;
}

const Status = ({ status }: StatusProps) => {
    const { darkMode } = useAppSelector((state) => state.theme);

    const classes = useStyles({ darkMode, status });
    return (
        <Box className={classes.root}>
            <Box className={classes.circle}></Box>
            <Typography className={classes.text}>{status}</Typography>
        </Box>
    );
};

export default Status;
