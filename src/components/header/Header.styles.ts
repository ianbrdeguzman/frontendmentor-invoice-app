import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        appbar: {
            backgroundColor: 'rgb(30, 33, 57);',
            height: '80px',
            position: 'sticky',
            top: 0,
        },
        toolbar: {
            height: '100%',
        },
        avatar: {
            width: theme.spacing(4),
            height: theme.spacing(4),
        },
        box: {
            backgroundColor: 'rgb(124, 93, 250);',
            height: '100%',
            width: '90px',
            borderTopRightRadius: '1rem',
            borderBottomRightRadius: '1rem',
        },
        boxBottom: {
            backgroundColor: 'rgb(146, 119, 255);',
            height: '40px',
            width: '100%',
            borderTopLeftRadius: '1rem',
            borderBottomRightRadius: '1rem',
        },
    })
);

export default useStyles;
