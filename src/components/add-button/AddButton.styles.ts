import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            textTransform: 'capitalize',
            backgroundColor: 'rgb(124, 93, 250)',
            borderRadius: '3rem',
            padding: '0.5rem',
            '&:hover': {
                backgroundColor: 'rgb(124, 93, 250)',
            },
            '&.MuiButton-label': {
                width: '24px',
            },
        },
        icon: {
            backgroundColor: 'white',
            color: 'rgb(124, 93, 250)',
            borderRadius: '100%',
        },
        text: {
            marginLeft: '0.2rem',
            fontSize: '12px',
            fontWeight: 'bold',
        },
    })
);

export default useStyles;