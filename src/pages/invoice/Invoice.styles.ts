import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface Props {
    darkMode: boolean;
    status: string | undefined;
}

const useStyles = makeStyles<Theme, Props>((theme: Theme) =>
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
        statusContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem',
            marginBottom: '1rem',
            borderRadius: '.5rem',
            backgroundColor: (props) =>
                props.darkMode ? '#1e2139' : '#ffffff',
        },
        content: {
            padding: '1rem',
            borderRadius: '.5rem',
            backgroundColor: (props) =>
                props.darkMode ? '#1e2139' : '#ffffff',
            [theme.breakpoints.down('sm')]: {
                display: 'grid',
                gridTemplateAreas: `
                'id id'
                'address address'
                'date bill'
                'email email'`,
            },
            [theme.breakpoints.up('md')]: {
                display: 'grid',
                gridTemplateAreas: `
                'id id address'
                'date bill email'`,
            },
        },
        idContainer: {
            marginBottom: '1rem',
            gridArea: 'id',
        },
        id: {
            fontWeight: 'bold',
            [theme.breakpoints.down('sm')]: {
                gridArea: 'id',
            },
        },
        span: {
            color: 'rgb(126, 136, 195)',
        },
        dateContainer: {
            margin: '1rem 0',
            gridArea: 'date',
        },
        createdDate: {
            marginBottom: '1rem',
        },
        mainText: {
            fontWeight: 'bold',
        },
        billContainer: {
            margin: '1rem 0',
            gridArea: 'bill',
        },
        emailContainer: {
            margin: '1rem 0',
            gridArea: 'email',
        },
    })
);

export default useStyles;
