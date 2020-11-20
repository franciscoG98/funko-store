import React from 'react'
import Container from '@material-ui/core/Container'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
   root:{
       background:'white',
       marginTop: theme.spacing(4),
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       opacity: '88%'
   }
}))

export default function MainContainer({children, ...props}){

    const styles = useStyles();

    return(
        <Container className ={styles.root} component ='main' maxWidth = 'xs' {...props}>
            {
                children
            }
        </Container>
    )

}