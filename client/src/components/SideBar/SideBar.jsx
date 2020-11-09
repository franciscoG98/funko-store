import React, { useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Axios from 'axios';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';



const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    font: {
      textDecoration: 'none',
      color: '#191970',
      fontSize: '20'
    }
  });
  


const SideBar = () => {
    const classes = useStyles();
    const [category, setCategory]= React.useState([])
    
    useEffect(()=>{
    Axios("http://localhost:3001/products/category")
        .then(r => setCategory(r.data.categories))
    },[])

    const [state, setState] = React.useState({
      left: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
            {/* estos elementos son los que vana aparecer en la seccion de arriba */}
          {category.map((text) => (
            <ListItem button key={text.id}>

              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <Link className= {classes.font} to= {`/product/${text.name}`} >
                  <ListItemText fontWeight= 'fontWeightBold' primary={text.name} />
              </Link>

            </ListItem>
          ))}
        </List>

        <Divider />
       
      </div>
    );
  
    return (
      <div>
        {['left'].map((anchor) => (

          <React.Fragment key={anchor}>

            {/* <Button onClick={toggleDrawer(anchor, true)}>  </Button> */}

            <MenuIcon onClick={toggleDrawer(anchor, true)} />

            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>

        ))}
      </div>
    );
}

export default SideBar; 



