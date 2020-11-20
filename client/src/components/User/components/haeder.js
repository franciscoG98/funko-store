import React from 'react'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import { Box } from '@material-ui/core';
import './haeder.css';

const useStyles = makeStyles((theme)=>({

    root: {
        margin: theme.spacing(3, 0, 2),
        fontFamily: 'Philosopher',
        textAlign: 'center',
        fontSize: '48px',
        color: '#3f51b5',
        textShadow: '1px 1px white'
    }
}))

export default function Header () {

    const styles = useStyles();

    return(
        // <Typography className={styles.root} component = 'h1'>
        //     User Registration!
        // </Typography>
        <div className= 'user'>
            User Registration!

        </div>
    )

}