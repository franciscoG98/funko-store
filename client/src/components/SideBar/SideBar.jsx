import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import Axios from 'axios';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getCategories/*, filterProducts*/ } from '../../actions/Categories';




const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: { 
      width: 'auto',
    },
    font: {
      fontFamily: 'Trade Winds',
      textDecoration: 'none',
      color: '#303030',
      fontSize: '20'
    },
    op: {
      opacity: '95%'
    },
  });
  


const SideBar = () => {
    const classes = useStyles();
    // const [category, setCategory]= React.useState([])
    const dispatch = useDispatch();
    const category = useSelector(state => state.Category.categories);

    // console.log(category);
    
    
    useEffect(()=>{
    // Axios("http://localhost:3001/products/category")
    //     .then(r => setCategory(r.data.categories))
      dispatch( getCategories() );
      // eslint-disable-next-line
    }, [])

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
          {!category ? <p>cargando...</p> : category.map((text) => (
            <Link className= {classes.font} to= {`/product/${text.name}`} >
              
                  <ListItem style={{fontFamily: 'Trade Winds'}} button key={text.id}>

                    {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              
                    <ListItemText style={{fontFamily: 'Trade Winds'}} primary={text.name} />              

                  </ListItem>
            </Link>
          ))}
        </List>       
       
      </div>
    );
  
    return (
      <div >
        {['left'].map((anchor) => (

          <React.Fragment className= {classes.op} key={anchor}>

            {/* <Button onClick={toggleDrawer(anchor, true)}>  </Button> */}

            <MenuIcon onClick={toggleDrawer(anchor, true)} />

            <SwipeableDrawer className= {classes.op}
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



