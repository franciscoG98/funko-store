import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    borderRadius: '25% !IMPORTANT',
    width: '300px',    
    margin: '55px',
    padding: '10px',
    
    borderBlockStyle: 'solid',       
    border: '13px',
    borderBlockColor: '#505050',
    "&:hover": {
      // backgroundColor: 'rgb(7, 177, 77, 0.42)',
      transform: 'scale(1.09)',
      transition: 'transform 0.5s',
      filter: 'brightness(123%)',       
    }    
  },
  
  media: {
    height: 130,
    width: 140,
    

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
});

export default useStyles;