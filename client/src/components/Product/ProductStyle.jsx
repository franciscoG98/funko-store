import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    borderRadius: '25% !IMPORTANT',
    width: '300px',    
    margin: '55px',
    padding: '10px',
    
    borderBlockStyle: 'solid',       
    border: '13px',
    borderBlockColor: '#484848',
    "&:hover": {
      // backgroundColor: 'rgb(7, 177, 77, 0.42)',
      transform: 'scale(1.09)',
      transition: 'transform 0.5s',
            
    }    
  },
  
  media: {
    height: 130,
    width: 140,
    "&:hover": {
      // backgroundColor: 'rgb(7, 177, 77, 0.42)',
      transform: 'scale(1.15)',
      transition: 'transform 0.5s',
      filter: 'brightness(128%)',
    }
  },
  // media: {
  //   height: 0,  
  //   paddingTop: '56.25%',
  //   16:9,
  // },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '0 auto',
  },
  paper: {
    backgroundColor: 'white',
    padding: 50,
    border: 'none',
    marginLeft: '0 auto',
  },

  adds: {
    color: '#585858',
    fontFamily: 'Philosopher', 
    fontWeight: 'bold', 
    marginLeft: '30px',
    borderRadius: '30px',
    transition: '0.8s',
    "&:hover": {      
      color: 'white',     
      transition: '0.8s',
      backgroundColor: '#484848',            
    },  
  },
  adds2: {
    color: '#585858',
    fontFamily: 'Philosopher', 
    fontWeight: 'bold', 
    marginLeft: '30px',
    borderRadius: '30px',
    transition: '0.8s',
    "&:hover": {      
      color: 'white',     
      transition: '0.8s',
      backgroundColor: '#484848',            
    },  
  },


});

export default useStyles;