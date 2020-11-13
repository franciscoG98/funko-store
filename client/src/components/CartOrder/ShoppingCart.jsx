import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Button, Dialog, Typography, TextField } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';

import { useSelector } from 'react-redux';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const ShoppingCart = () => {

    const order = useSelector(state => state.Order.items);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
    <div>

        <ShoppingCartRoundedIcon onClick={handleClickOpen} />

        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Shopping Cart
            </DialogTitle>

                {order.map( (i) => {
                    <DialogContent divider>
                        <Typography>

                            {console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa:\n',i.name)}

                            <img src={i.imagen}/>
                            <span>{i.name}   ${i.price}</span>

                        </Typography>
                    </DialogContent>
                })}



            <DialogActions>
                <Button autoFocus onClick={() => alert('aca tendria que saltar a otro coso pa comprar vieron')} color="primary">
                    Buy
                </Button>
            </DialogActions>
        </Dialog>
    </div>
    );
}


export default ShoppingCart; 