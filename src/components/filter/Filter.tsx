import { useRef, useState } from 'react';
import {
    Paper,
    MenuList,
    Popper,
    Grow,
    MenuItem,
    Button,
    ClickAwayListener,
    Radio,
    FormControlLabel,
    Typography,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import useStyles from './Filter.styles';
import useWindowSize from '../../hooks/useWindowSize';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setFilter } from '../../redux/slices/invoiceSlice';

const filters = ['all', 'paid', 'pending', 'draft'];

const Filter = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLButtonElement>(null);
    const size = useWindowSize();
    const { filter: filterValue } = useAppSelector((state) => state.invoice);
    const dispatch = useAppDispatch();

    const handleFilterOnChange = (e: any) => {
        dispatch(setFilter(e.target.value));
        setOpen(!open);
    };

    return (
        <div>
            <Button
                ref={anchorRef}
                className={classes.button}
                onClick={() => setOpen(!open)}
            >
                <span className={classes.title}>Filter</span>
                {size.width && size.width > 600 && (
                    <span className={classes.title}>by status</span>
                )}
                {open ? (
                    <KeyboardArrowUpIcon
                        fontSize='small'
                        className={classes.icon}
                    />
                ) : (
                    <KeyboardArrowDownIcon
                        fontSize='small'
                        className={classes.icon}
                    />
                )}
            </Button>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom'
                                    ? 'center top'
                                    : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener
                                onClickAway={() => setOpen(!open)}
                            >
                                <MenuList>
                                    {filters.map((filter) => (
                                        <MenuItem
                                            key={filter}
                                            value={filter}
                                            className={classes.container}
                                        >
                                            <FormControlLabel
                                                value={filter}
                                                control={
                                                    <Radio
                                                        size='small'
                                                        className={
                                                            classes.radio
                                                        }
                                                    />
                                                }
                                                label={
                                                    <Typography variant='body2'>
                                                        {filter}
                                                    </Typography>
                                                }
                                                checked={
                                                    filter === filterValue
                                                        ? true
                                                        : false
                                                }
                                                onChange={handleFilterOnChange}
                                                className={classes.item}
                                            />
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
};

export default Filter;
