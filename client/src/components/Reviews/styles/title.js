import React from 'react'
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles((theme)=>({

    root: {
        margin: theme.spacing(3, 0, 2),
        fontFamily: 'Trade Winds',
        textAlign: 'center',
        fontSize: '30px',
        color: '#303030',
        textShadow: '1px 1px white'
    }

}))

export default function Title () {

    const styles = useStyles();
    
    return(
        <div className= {styles.root} component = 'h2'>
            Tell us what you think of this product!
        </div>
    )

}