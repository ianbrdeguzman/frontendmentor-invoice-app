import useStyles from './AddButton.styles';
import { Typography, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import useWindowSize from '../../hooks/useWindowSize';

const AddButton = () => {
    const classes = useStyles();
    const size = useWindowSize();

    return (
        <Button className={classes.button}>
            <AddIcon className={classes.icon} />
            {size.width && size.width > 900 && (
                <Typography variant='body2' className={classes.text}>
                    New Invoice
                </Typography>
            )}
        </Button>
    );
};

export default AddButton;
