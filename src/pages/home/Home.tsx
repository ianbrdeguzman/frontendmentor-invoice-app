import { useEffect } from 'react';
import { Paper, Box, Typography } from '@material-ui/core';
import useStyles from './Home.styles';
import Filter from '../../components/filter/Filter';
import AddButton from '../../components/add-button/AddButton';
import InvoiceCard from '../../components/invoice-card/InvoiceCard';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setInvoices } from '../../redux/slices/invoiceSlice';
import useFetch from '../../hooks/useFetch';

const Home = () => {
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const { loading, data, error } = useFetch('/data/data.json');
    const { invoices } = useAppSelector((state) => state.invoice);

    useEffect(() => {
        dispatch(setInvoices(data));
    }, [data, dispatch]);

    return loading ? (
        <Box display='flex' justifyContent='center'>
            <Typography variant='body1'>Loading...</Typography>
        </Box>
    ) : error ? (
        <Box display='flex' justifyContent='center'>
            <Typography variant='body1'>Error!</Typography>
        </Box>
    ) : (
        <Paper square>
            <Box className={classes.root}>
                <Box display='flex' className={classes.container}>
                    <Box flexGrow='1' className={classes.header}>
                        <Typography variant='h4' className={classes.title}>
                            Invoices
                        </Typography>
                        <Typography variant='body2' color='textSecondary'>
                            There are {invoices.length} total invoices
                        </Typography>
                    </Box>
                    <Filter />
                    <AddButton />
                </Box>
                {invoices.map((invoice) => (
                    <InvoiceCard key={invoice.id} {...invoice} />
                ))}
            </Box>
        </Paper>
    );
};

export default Home;
