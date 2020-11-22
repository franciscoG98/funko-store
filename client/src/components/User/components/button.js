import React from 'react'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
    root:{
        margin: theme.spacing(3, 0, 2),

    }
}));

export default function PrimaryButton({children, ...props}){
    const styles = useStyles();

    return(
        <Button 
        type='submit'
        fullWidth
        variant = 'contained'
        color = 'white'
        backgroundColor ='#303030'
        className ={styles.root}
        {...props}
        >
            {
                children
            }
        </Button>
    )

}