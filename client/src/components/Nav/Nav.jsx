import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useStyles from './NavStyles';
import './Nav.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import SearchBar from '../SearchBar/SearchBar'
import SideBar from '../SideBar/SideBar';

import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '../User/components/avatar.jsx'
import MailIcon from '@material-ui/icons/Mail';
import MoreIcon from '@material-ui/icons/MoreVert';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import GitHubIcon from '@material-ui/icons/GitHub';



export default function PrimarySearchAppBar() {

  const classes = useStyles();
  const order = useSelector(state => state.Order.items);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [userEl, setUserEl] = React.useState(null);  

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isUserMenuOpen = Boolean(userEl);

  //menu desplegable categories-products

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  //version mobile

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };  

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  //componente de usuario logueado

  const handleLoggedUserMenu = (event) => {
       setUserEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserEl(null);
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
      style={{ opacity: '80%', marginTop: '52px', marginLeft: '39px' }}
    >
      {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
      <MenuItem onClick={handleMenuClose}>  <Link style={{ textDecoration: 'none', color: '#4B0082', fontWeight: 'bolder' }} to='/admin/categories'> Categories </Link> </MenuItem>
      <MenuItem onClick={handleMenuClose}>  <Link style={{ textDecoration: 'none', color: '#4B0082', fontWeight: 'bolder' }} to='/admin/products'> Products </Link> </MenuItem>

    </Menu>    
  );

  
  const renderUserMenu = (
    <Menu
      userEl={userEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isUserMenuOpen}
      onClose={handleUserMenuClose}
      style={{ opacity: '80%', marginTop: '-838px', paddingRight: '0px', display: 'flex', marginLeft: '-255px'/* , marginBottom: '875px' */ }}
    >
      {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
      <MenuItem onClick={handleMenuClose}>  <img class="circle" src='https://cdn3.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumb900.jpg' alt='profile pic' style={{ width: 'auto', height: '60px' }} /> <span className='signedas'> Signed as you </span> </MenuItem>
      <MenuItem onClick={handleMenuClose}> <span className= 'signout'> Sign out </span> </MenuItem>
      {/* <MenuItem onClick={handleMenuClose}>  <Link style={{ textDecoration: 'none', color: '#4B0082', fontWeight: 'bolder' }} to='/admin/products'> Products </Link> </MenuItem> */}

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
        <Link to='/ShoppingCart2' >
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
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/'> Funko's Store </Link>
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

            {/* github signIn */}
            <Link to="/login" style={{ textDecoration: 'none', color: 'white' }} >
              <IconButton aria-label="show 0 new mails" color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <GitHubIcon />
                </Badge>
              </IconButton>
            </Link>

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
            <Link to='/ShoppingCart2' style={{ textDecoration: 'none', color: 'white' }} >
              <IconButton aria-label="show 0 new notifications" color="inherit">
                <Badge badgeContent={order.length} color="secondary">
                  <ShoppingCartRoundedIcon />
                </Badge>
              </IconButton>
            </Link>

            {/* user */}
            <Link to="/register" style={{ textDecoration: 'none', color: 'white' }} >
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
            </Link>

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

          <IconButton
              // aria-label="show 0 new notifications" 
              color="inherit"
              /* edge="end" */
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleLoggedUserMenu}
              color="inherit"
            >
              <Badge badgeContent={0} color="secondary">
                <Avatar />
              </Badge>
            </IconButton>

         
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

          


          <SearchBar classes={classes} />

        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderUserMenu}
      {renderMenu}
      
    </div>
  );
}
