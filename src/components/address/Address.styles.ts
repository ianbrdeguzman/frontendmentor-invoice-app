import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface Props {
    position: string;
    width: number | undefined;
}

const useStyles = makeStyles<Theme, Props>((theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            fontStyle: 'normal',
            color: 'rgba(255, 255, 255, 0.7);',
            gridArea: 'address',
            textAlign: (props) =>
                props.width && props.width > 960 && props.position === 'right'
                    ? 'right'
                    : 'left',
        },
    })
);

export default useStyles;
