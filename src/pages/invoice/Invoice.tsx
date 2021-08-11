import { Box, Grid, Paper, Typography } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import useStyles from './Invoice.styles';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

interface Params {
    id: string;
}

const InvoicePage = () => {
    const classes = useStyles();
    const { id } = useParams<Params>();

    return (
        <Paper square>
            <Grid container direction='column' className={classes.root}>
                <Grid item>
                    <Link to='/' className={classes.back}>
                        <ChevronLeftIcon />
                        <Typography variant='body2' color='textPrimary'>
                            Go back
                        </Typography>
                    </Link>
                </Grid>
                <Grid item>
                    <Typography variant='body2'>Status</Typography>
                    {/* <Box className={classes.status}>
                        <div className={classes.box}></div>
                        <Typography variant='body2'>{status}</Typography>
                    </Box> */}
                </Grid>
                <Grid item>Back</Grid>
            </Grid>
        </Paper>
    );
};

export default InvoicePage;
