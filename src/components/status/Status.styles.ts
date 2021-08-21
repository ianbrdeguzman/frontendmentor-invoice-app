import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface Props {
    darkMode: boolean;
    status: string | undefined;
}

const useStyles = makeStyles<Theme, Props>((theme: Theme) =>
    createStyles({
        root: {
            textTransform: 'capitalize',
            minWidth: '100px',
            maxWidth: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '.7rem 0',
            borderRadius: '.3rem',
            backgroundColor: (props) =>
                props.status === 'paid'
                    ? 'rgba(51, 214, 159, 0.1)'
                    : props.status === 'pending'
                    ? 'rgba(255, 143, 0, 0.1)'
                    : props.darkMode
                    ? 'rgba(223, 227, 250, 0.1)'
                    : 'rgba(55, 59, 83, 0.06)',
            [theme.breakpoints.down('sm')]: {
                gridArea: 'status',
                marginLeft: 'auto',
            },
        },
        circle: {
            width: '0.5rem',
            height: '0.5rem',
            marginRight: '0.5rem',
            borderRadius: '50%',
            backgroundColor: (props) =>
                props.status === 'paid'
                    ? 'rgb(51, 214, 159)'
                    : props.status === 'pending'
                    ? 'rgb(255, 143, 0)'
                    : props.darkMode
                    ? 'rgb(223, 227, 250)'
                    : 'rgb(55, 59, 83);',
        },
        text: {
            color: (props) =>
                props.status === 'paid'
                    ? 'rgb(51, 214, 159)'
                    : props.status === 'pending'
                    ? 'rgb(255, 143, 0)'
                    : props.darkMode
                    ? 'rgb(223, 227, 250)'
                    : 'rgb(55, 59, 83);',
            fontWeight: 'bold',
            fontSize: '12px',
            paddingTop: '.1rem',
        },
    })
);

export default useStyles;
