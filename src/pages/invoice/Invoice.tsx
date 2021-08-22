import { useEffect } from 'react';
import useStyles from './Invoice.styles';
import { Box, Grid, Paper, Typography } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { findInvoice } from '../../redux/slices/invoiceSlice';
import Status from '../../components/status/Status';
import moment from 'moment';
import Address from '../../components/address/Address';

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

    console.log(invoice);

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
                <Grid item className={classes.content}>
                    <Grid item className={classes.idContainer}>
                        <Typography variant='body2' className={classes.id}>
                            <span className={classes.span}>#</span>
                            {invoice?.id}
                        </Typography>
                        <Typography variant='body2' color='textSecondary'>
                            {invoice?.description}
                        </Typography>
                    </Grid>
                    {invoice && (
                        <Address {...invoice.senderAddress} position='right' />
                    )}
                    <Grid item className={classes.dateContainer}>
                        <Box className={classes.createdDate}>
                            <Typography variant='body2' color='textSecondary'>
                                Invoice Date
                            </Typography>
                            <Typography
                                variant='body1'
                                className={classes.mainText}
                            >
                                {moment(invoice?.createdAt).format(
                                    'DD MMM YYYY'
                                )}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='body2' color='textSecondary'>
                                Due Date
                            </Typography>
                            <Typography
                                variant='body1'
                                className={classes.mainText}
                            >
                                {moment(invoice?.paymentDue).format(
                                    'DD MMM YYYY'
                                )}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item className={classes.billContainer}>
                        <Typography variant='body2' color='textSecondary'>
                            Bill To
                        </Typography>
                        <Typography
                            variant='body1'
                            className={classes.mainText}
                        >
                            {invoice?.clientName}
                        </Typography>
                        {invoice && (
                            <Address
                                {...invoice.clientAddress}
                                position='left'
                            />
                        )}
                    </Grid>
                    <Grid item className={classes.emailContainer}>
                        <Typography variant='body2' color='textSecondary'>
                            Sent To
                        </Typography>
                        <Typography
                            variant='body1'
                            className={classes.mainText}
                        >
                            {invoice?.clientEmail}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default InvoicePage;
