import React from 'react'
import Container from '@material-ui/core/Container'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
    root: {
        background: 'white',
        alignItems: 'center',
        border: 'outset'
    }
}))

export default function ProfileContainer({children, ...props}){
    const styles = useStyles();
    return (
        <Container className = {styles.root} component = 'main' maxWidth = 'xs' {...props}>
            {children}
        </Container>
    )
}