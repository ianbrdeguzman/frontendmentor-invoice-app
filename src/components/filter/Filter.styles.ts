import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            textTransform: 'capitalize',
            display: 'flex',
            justifyContent: 'space-between',
            marginRight: '0.5rem',
            '& span': {
                marginRight: '0.2rem',
                fontWeight: 'bold',
            },
        },
        icon: {
            color: 'rgb(124, 93, 250)',
        },
        title: {
            fontSize: '12px',
        },
        container: {
            padding: '0',
            minWidth: '140px',
        },
        item: {
            width: '100%',
            margin: 0,
            '& p': {
                fontSize: '12px',
                textTransform: 'capitalize',
            },
        },
        radio: {
            color: 'rgb(124, 93, 250)',
            '&.Mui-checked': {
                color: 'rgb(124, 93, 250)',
            },
        },
    })
);

export default useStyles;
