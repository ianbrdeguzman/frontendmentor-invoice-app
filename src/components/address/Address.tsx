import { Box } from '@material-ui/core';
import useStyles from './Address.styles';
import { Address as AddressType } from '../../lib/types';

const Address = ({ city, country, postCode, street }: AddressType) => {
    const classes = useStyles();
    return (
        <address className={classes.root}>
            <Box component='span'>{street}</Box>
            <Box component='span'>{city}</Box>
            <Box component='span'>{postCode}</Box>
            <Box component='span'>{country}</Box>
        </address>
    );
};

export default Address;
