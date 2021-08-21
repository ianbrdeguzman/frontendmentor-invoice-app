import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minHeight: 'calc(100vh - 80px)',
            transition: 'background 0.3s ease',
            paddingBottom: '.5rem',
            border: '1px solid transparent', // hack
        },
        container: {
            width: '100%',
            maxWidth: '780px',
            margin: '0',
            padding: '1rem',
            alignItems: 'center',
            [theme.breakpoints.up('md')]: {
                margin: '1rem auto',
            },
        },
        header: {
            marginTop: '1rem',
        },
        title: {
            fontWeight: 'bold',
        },
    })
);

export default useStyles;
