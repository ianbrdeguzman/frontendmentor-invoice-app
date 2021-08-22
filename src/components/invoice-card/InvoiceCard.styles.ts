import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface Props {
    darkMode: boolean;
    status: string;
}

const useStyles = makeStyles<Theme, Props>((theme) =>
    createStyles({
        root: {
            maxWidth: '780px',
            margin: '1rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            borderRadius: '.5rem',
            border: (props) =>
                `1px solid ${props.darkMode ? '#1e2139' : '#ffffff'}`,
            backgroundColor: (props) =>
                props.darkMode ? '#1e2139' : '#ffffff',
            '&:hover': {
                border: '1px solid rgb(124, 93, 250)',
            },
            [theme.breakpoints.up('md')]: {
                margin: '1rem auto',
            },
        },
        content: {
            '&:last-child': {
                padding: '1rem',
            },
            [theme.breakpoints.down('sm')]: {
                display: 'grid',
                gridTemplateAreas: `
                'id name'
                'date status'
                'total status'`,
            },
            [theme.breakpoints.up('md')]: {
                display: 'grid',
                gridTemplateColumns:
                    '5rem 9rem 1fr min-content min-content min-content',
                gridTemplateRows: 'min-content',
                alignItems: 'center',
            },
        },
        id: {
            fontWeight: 'bold',
            [theme.breakpoints.down('sm')]: {
                gridArea: 'id',
                marginBottom: '1rem',
            },
        },
        date: {
            [theme.breakpoints.down('sm')]: {
                gridArea: 'date',
            },
        },
        name: {
            [theme.breakpoints.down('sm')]: {
                gridArea: 'name',
                textAlign: 'right',
                marginBottom: '1rem',
            },
        },
        span: {
            color: 'rgb(126, 136, 195)',
        },
        total: {
            marginRight: '1rem',
            fontWeight: 'bold',
            [theme.breakpoints.down('sm')]: {
                gridArea: 'total',
            },
            [theme.breakpoints.up('md')]: {
                textAlign: 'right',
            },
        },
        icon: {
            color: 'rgb(124, 93, 250)',
            marginLeft: '1rem',
        },
    })
);

export default useStyles;
