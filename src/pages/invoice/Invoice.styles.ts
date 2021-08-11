import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minHeight: 'calc(100vh - 80px)',
            width: '90%',
            maxWidth: '780px',
            margin: '0 auto',
            padding: '2rem 0 .5rem 0',
            transition: 'background 0.3s ease',
        },
        back: {
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '2rem',
            '& > svg': {
                color: 'rgb(124, 93, 250)',
            },
            '& > p:': {
                transition: 'color 0.3s ease',
            },
            '& > p:hover': {
                color: theme.palette.text.secondary,
            },
        },
        // status: {
        //     textTransform: 'capitalize',
        //     minWidth: '100px',
        //     maxWidth: '100px',
        //     display: 'flex',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     padding: '.7rem 0',
        //     borderRadius: '.3rem',
        //     color: (props) =>
        //         props.status === 'paid'
        //             ? 'rgb(51, 214, 159)'
        //             : props.status === 'pending'
        //             ? 'rgb(255, 143, 0)'
        //             : 'rgb(223, 227, 250)',
        //     backgroundColor: (props) =>
        //         props.status === 'paid'
        //             ? 'rgba(51, 214, 159, 0.1)'
        //             : props.status === 'pending'
        //             ? 'rgba(255, 143, 0, 0.1)'
        //             : 'rgba(223, 227, 250, 0.1)',
        //     [theme.breakpoints.down('sm')]: {
        //         gridArea: 'status',
        //         marginLeft: 'auto',
        //     },
        //     [theme.breakpoints.up('md')]: {
        //         margin: '0 1rem',
        //     },
        // },
        // box: {
        //     width: '0.5rem',
        //     height: '0.5rem',
        //     marginRight: '0.5rem',
        //     borderRadius: '50%',
        //     backgroundColor: (props) =>
        //         props.status === 'paid'
        //             ? 'rgb(51, 214, 159)'
        //             : props.status === 'pending'
        //             ? 'rgb(255, 143, 0)'
        //             : 'rgb(223, 227, 250)',
        // },
    })
);

export default useStyles;
