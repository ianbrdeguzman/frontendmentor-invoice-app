import { useEffect } from 'react';
import useStyles from './Invoice.styles';
import { Box, Grid, Paper, Typography } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { findInvoice } from '../../redux/slices/invoiceSlice';
import { Helmet } from 'react-helmet';

interface Params {
    id: string;
}

const InvoicePage = () => {
    const { id } = useParams<Params>();
    const { invoice } = useAppSelector((state) => state.invoice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(findInvoice(id));
    }, [id, dispatch]);

    const classes = useStyles();

    return (
        <>
            <Helmet>
                <title>Frontend Mentor | #{id}</title>
            </Helmet>
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
                        <Box>
                            <div></div>
                            <Typography variant='body2'>
                                {invoice?.status}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item>Back</Grid>
                </Grid>
            </Paper>
        </>
    );
};

export default InvoicePage;
