import useStyles from './InvoiceCard.styles';
import { Typography, Card, CardContent, Box } from '@material-ui/core';
import { useThemeSelector } from '../../redux/slices/themeHook';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import moment from 'moment';
import numeral from 'numeral';
import useWindowSize from '../../hooks/useWindowSize';

interface ClientAddress {
    city: string;
    country: string;
    postCode: string;
    street: string;
}

interface Items {
    name: string;
    price: number;
    quantity: number;
    total: number;
}

interface SenderAddress {
    city: string;
    country: string;
    postCode: string;
    street: string;
}

interface IProps {
    clientAddress: ClientAddress;
    clientEmail: string;
    clientName: string;
    createdAt: string;
    description: string;
    id: string;
    items: Items[];
    paymentDue: string;
    senderAddress: SenderAddress;
    status: string;
    total: number;
}

const InvoiceCard: React.FC<IProps> = ({
    id,
    createdAt,
    clientName,
    total,
    status,
}) => {
    const { darkMode } = useThemeSelector((state) => state.theme);
    const size = useWindowSize();
    const classes = useStyles({ darkMode, status });

    return (
        <Card elevation={0} key={id} className={classes.root}>
            <CardContent className={classes.content}>
                <Typography variant='body2' className={classes.id}>
                    <span className={classes.span}>#</span>
                    {id}
                </Typography>
                <Typography
                    variant='body2'
                    color='textSecondary'
                    className={classes.date}
                >
                    Due {moment(createdAt).format('DD MMM YYYY')}
                </Typography>
                <Typography variant='body2' className={classes.name}>
                    {clientName}
                </Typography>
                <Typography className={classes.total}>
                    £{numeral(total).format('0,0.00')}
                </Typography>
                <Box className={classes.status}>
                    <div className={classes.box}></div>
                    <Typography variant='body2'>{status}</Typography>
                </Box>
                {size.width && size.width > 900 && (
                    <ChevronRightIcon
                        fontSize='small'
                        className={classes.icon}
                    />
                )}
            </CardContent>
        </Card>
    );
};

export default InvoiceCard;
