import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Material
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { loginUser } from '../../actions/Login';


import useStyles from './UserLoginStyles';

//footer Copyright
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="yellow" href="https://soyhenry.com/" target="_blank">
                Powered by Henry
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// login Form
function UserLogin() {
    const classes = useStyles();

    const dispatch = useDispatch();

    const [login, setLogin] = useState({
        email: "",
        password: "",
    })

    function handleChange(e) {
        setLogin({ ...login, [e.target.id]: e.target.value })
    }

    //axios for submit data
    const handleSubmit = e => {
        e.preventDefault()

        dispatch(loginUser(login));

    }




    return (
        <Container className={classes.todo} component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
        </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required={true}
                        fullWidth
                        id="email"
                        label="Email Address"
                        placeholder="soyhenry@funkos.com"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleChange}

                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required={true}
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleChange}
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
                    // onSubmit={handleSubmit}
                    >
                        Sign In
          </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="/lost-password" variant="body2">
                                Forgot password?
              </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/register" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}

export default UserLogin;