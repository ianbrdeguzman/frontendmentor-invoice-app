import { useEffect } from 'react';
import useStyles from './Invoice.styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { findInvoice } from '../../redux/slices/invoiceSlice';
import Status from '../../components/status/Status';

interface Params {
    id: string;
}

const InvoicePage = () => {
    const { id } = useParams<Params>();
    const { invoice } = useAppSelector((state) => state.invoice);
    const { darkMode } = useAppSelector((state) => state.theme);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(findInvoice(id));
    }, [id, dispatch]);

    const status = invoice?.status;

    const classes = useStyles({ darkMode, status });

    return (
        <Paper square>
            <Grid container direction='column' className={classes.root}>
                <Link to='/' className={classes.back}>
                    <ChevronLeftIcon />
                    <Typography variant='body2' color='textPrimary'>
                        Go back
                    </Typography>
                </Link>
                <Grid item className={classes.statusContainer}>
                    <Typography variant='body2'>Status</Typography>
                    <Status status={invoice?.status} />
                </Grid>
                <Grid item>Back</Grid>
            </Grid>
        </Paper>
    );
};

export default InvoicePage;
