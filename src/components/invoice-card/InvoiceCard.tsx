import useStyles from './InvoiceCard.styles';
import { Typography, Card, CardContent } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import moment from 'moment';
import numeral from 'numeral';
import useWindowSize from '../../hooks/useWindowSize';
import { useHistory } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import { InvoiceCardProps } from '../../lib/types';
import Status from '../status/Status';

const InvoiceCard = ({
    id,
    paymentDue,
    clientName,
    total,
    status,
}: InvoiceCardProps) => {
    const { darkMode } = useAppSelector((state) => state.theme);
    const size = useWindowSize();
    const classes = useStyles({ darkMode, status });
    const { push } = useHistory();

    return (
        <Card
            elevation={0}
            key={id}
            className={classes.root}
            onClick={() => push(`/invoice/${id}`)}
        >
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
                    Due {moment(paymentDue).format('DD MMM YYYY')}
                </Typography>
                <Typography variant='body2' className={classes.name}>
                    {clientName}
                </Typography>
                <Typography className={classes.total}>
                    £{numeral(total).format('0,0.00')}
                </Typography>
                <Status status={status} />
                {size.width && size.width > 960 && (
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
