import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles<Theme>((theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            fontStyle: 'normal',
            color: 'rgba(255, 255, 255, 0.7);',
            gridArea: 'address',
            '&:first-child': {
                border: '1px solid red',
            },
        },
    })
);

export default useStyles;
