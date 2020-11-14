import React from 'react';
import { useSelector } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import SearchBar from '../SearchBar/SearchBar'
import SideBar from '../SideBar/SideBar';
// import ShoppingCart from '../CartOrder/ShoppingCart';

import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import {Link} from 'react-router-dom';

import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import MoreIcon from '@material-ui/icons/MoreVert';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';

import useStyles from './NavStyles';

export default function PrimarySearchAppBar() {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const order = useSelector(state => state.Order.items);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      style= {{opacity: '80%', marginTop: '34px', paddingRight: '30px'}}
    >
      {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
      <MenuItem onClick={handleMenuClose}>  <Link style= {{textDecoration: 'none', color: '#4B0082', fontWeight: 'bolder' }} to= '/admin/categories'> Categories </Link> </MenuItem>
      <MenuItem onClick={handleMenuClose}>  <Link style= {{textDecoration: 'none', color: '#4B0082', fontWeight: 'bolder' }} to= '/admin/products'> Products </Link> </MenuItem>
      
    </Menu>
  );


  // aca esta la version mobile
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="" color="inherit">
          <Badge badgeContent={0} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>

        {/* carrito fail */}
        {/* <IconButton aria-label="" color="inherit">
          <Badge badgeContent={0} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton> */}

        {/* carrito 2 */}
        <Link to= '/ShoppingCart2' >
          <IconButton aria-label="show 0 new notifications" color="inherit">
            <Badge badgeContent={order.length} color="secondary">
              <ShoppingCartRoundedIcon />
            </Badge>
          </IconButton>
        </Link>
        <p>Notifications</p>
      </MenuItem>

        {/* Settings */}
        <MenuItem>
        <IconButton aria-label="" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <SettingsRoundedIcon />
          </Badge>
        </IconButton>
        <p>Settings</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  // aca termina la version mobile

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          {/* sidebar */}
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <SideBar /> 
          </IconButton>

          {/* Menu */}
          <Typography className={classes.title} variant="h6" noWrap>
            <Link style= {{textDecoration: 'none', color: 'white' }} to= '/'> Funko's Store </Link>
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

            {/* mensajito */}
            <IconButton aria-label="show 0 new mails" color="inherit">
              <Badge badgeContent={0} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>

            {/* carrito fail */}
            {/* <IconButton aria-label="show 0 new notifications" color="inherit">
              <Badge badgeContent={0} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton> */}

            {/* carrito 2 */}
            <Link to= '/ShoppingCart2' style= {{textDecoration: 'none', color: 'white' }} >
              <IconButton aria-label="show 0 new notifications" color="inherit">
                <Badge badgeContent={order.length} color="secondary">
                  <ShoppingCartRoundedIcon />
                </Badge>
              </IconButton>
            </Link>

            {/* user */}
            <IconButton
              aria-label="show 0 new notifications" 
              color="inherit"
              // edge="end"
              // aria-label="account of current user"
              // aria-controls={menuId}
              // aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              // color="inherit"
            >
              <AccountCircle />
            </IconButton>

            {/* la tuerquitas visteSSS */}
            <IconButton 
              // aria-label="show 0 new notifications" 
              // color="inherit"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Badge badgeContent={0} color="secondary">
                <SettingsRoundedIcon />
              </Badge>
            </IconButton>

          </div>
          
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >

              <MoreIcon />

              
            </IconButton>
          </div>

            <SearchBar classes={classes}/>

        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
