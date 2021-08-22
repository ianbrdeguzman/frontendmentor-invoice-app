import { Box } from '@material-ui/core';
import useStyles from './Address.styles';
import { Address as AddressType } from '../../lib/types';
import useWindowSize from '../../hooks/useWindowSize';

type AddressPropsType = AddressType & { position: string };

const Address = ({
    city,
    country,
    postCode,
    street,
    position,
}: AddressPropsType) => {
    const { width } = useWindowSize();
    const classes = useStyles({ position, width });
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
