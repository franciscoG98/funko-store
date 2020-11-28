import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import { passwordReset } from '../../actions/User';
import { useParams } from 'react-router';
import useStyles from './UserLoginStyles';
import { loadSession } from './../../store/saveToSessionStorage/sessionStorage';

// Reset password Form
function ResetPassword() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const userData = loadSession();
    const userId = userData && userData.id;

    // const { id } = useParams();

    const handleSubmit = e => {
        e.preventDefault()

        dispatch(passwordReset(userId));

    }


    return (
        <Container className={classes.todo} component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <FingerprintIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Forgot Password
                </Typography>

                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="New Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Confirm New Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                    >
                        Reset
                    </Button>

                </form>
            </div>

        </Container>
    );
}

export default ResetPassword;