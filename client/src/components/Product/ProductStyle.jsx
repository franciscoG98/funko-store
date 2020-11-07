import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 15,
    padding: 10,
  },
  media: {
    height: 150,
    width: 150,
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
  },
  paper: {
    backgroundColor: 'white',
    padding: 50,
    border: 'none',
  },
});

export default useStyles;