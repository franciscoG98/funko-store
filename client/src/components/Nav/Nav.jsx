import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadSession } from "../../store/saveToSessionStorage/sessionStorage"
import { logout } from '../../actions/Login';
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
import MoreIcon from '@material-ui/icons/MoreVert';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import GitHubIcon from '@material-ui/icons/GitHub';
import ShopTwoIcon from '@material-ui/icons/ShopTwo';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const user = loadSession();

var userId = 0

if (user) { userId = user.id }

export default function PrimarySearchAppBar() {

  const classes = useStyles();
  const order = useSelector(state => state.Order.items);
  const dispatch = useDispatch();
  const userData = loadSession();

  let username = userData && userData.username;
  let logged = userData && userData;
  let isAdmin = userData && userData.isAdmin;


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
      style={{ opacity: '80%', marginTop: '4px', marginLeft: '-210px' }}
    >
      {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
      <MenuItem onClick={handleMenuClose}>  <Link style={{ textDecoration: 'none', color: '#303030', fontWeight: 'lighter', fontFamily: 'Trade Winds' }} to='/products/admin'> Orders </Link> </MenuItem>
      <MenuItem onClick={handleMenuClose}>  <Link style={{ textDecoration: 'none', color: '#303030', fontWeight: 'lighter', fontFamily: 'Trade Winds' }} to='/admin/categories'> Categories </Link> </MenuItem>
      <MenuItem onClick={handleMenuClose}>  <Link style={{ textDecoration: 'none', color: '#303030', fontWeight: 'lighter', fontFamily: 'Trade Winds' }} to='/admin/products'> Products </Link> </MenuItem>

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
      style={{ opacity: '80%', marginTop: '-717px', marginLeft: '-272px' }}
    >

      {/* si no hay usuario logueado muestra login y create account, de lo contrario muestra signed as (username) y sign out */}

      {!logged ?

        <Menu
          userEl={userEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={menuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isUserMenuOpen}
          onClose={handleUserMenuClose}
          style={{ opacity: '80%', marginTop: '-700px', marginLeft: '-272px' }}
        >
          <Link to="/login" style={{ textDecoration: 'none', color: 'black' }} >
            <MenuItem onClick={handleUserMenuClose}> <span style={{ textDecoration: 'none', color: '#303030', fontWeight: 'lighter', fontFamily: 'Trade Winds', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}> Sign In! </span> </MenuItem>
          </Link>
          <Link to="/register" style={{ textDecoration: 'none', color: 'black' }} >
            <MenuItem onClick={handleUserMenuClose}> <span style={{ textDecoration: 'none', color: '#303030', fontWeight: 'lighter', fontFamily: 'Trade Winds' }}> Create Account </span> </MenuItem>
          </Link>
        </Menu>

        : <Menu
          userEl={userEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={menuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isUserMenuOpen}
          onClose={handleUserMenuClose}
          style={{ opacity: '80%', marginTop: '-698px', marginLeft: '-519px' }}
        >
          <MenuItem onClick={handleUserMenuClose} style={{ height: '37px' }}> <img class="circle" src='https://www.urbecom.com/css/profile/img-usuario.svg' alt='profile pic' />
            <span className='signedas'> Signed as {username} </span>
          </MenuItem>

          <MenuItem onClick={handleUserMenuClose}> <span style={{ textDecoration: 'none', color: '#303030', fontWeight: 'lighter', fontFamily: 'Trade Winds', textAlign: 'center', marginLeft: 'auto', height: '25px' }}> Profile </span> </MenuItem>


          <Link to="/login" style={{ textDecoration: 'none', color: 'black' }} >
            <MenuItem onClick={() => dispatch(logout())}>
              <span onClick={handleUserMenuClose} style={{ textDecoration: 'none', color: '#303030', fontWeight: 'lighter', fontFamily: 'Trade Winds', textAlign: 'center', marginLeft: 'auto' }}>
                Logout
              </span>
            </MenuItem>
          </Link>
        </Menu>}

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
      {/* home */}
      <MenuItem>
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }} >
          <IconButton aria-label="show 0 new notifications" color="inherit">
            <Badge badgeContent={order.length} color="secondary">
              <ShopTwoIcon />
            </Badge>
          </IconButton>
        </Link>
        <p>Home</p>
      </MenuItem>


      {/* carrito 2 */}
      <MenuItem>
        {userId ? <Link to='/UserCart' style={{ textDecoration: 'none', color: 'black'}}> 
          <IconButton aria-label="show 0 new notifications" color="inherit">
            <Badge badgeContent={order.length} color="secondary">
              <ShoppingCartRoundedIcon />
            </Badge>
          </IconButton>
        </Link> : <Link to='/GuestCart' style={{ textDecoration: 'none', color: 'black' }} >
            <IconButton aria-label="show 0 new notifications" color="inherit">
              <Badge badgeContent={order.length} color="secondary">
                <ShoppingCartRoundedIcon />
              </Badge>
            </IconButton>
          </Link>}
        <p>Shopping Cart</p>
      </MenuItem>

      {/* Profile */}
      <MenuItem>
        <IconButton aria-label="" color="inherit">
          <Badge badgeContent={0} color="secondary">
            <AccountCircle />
          </Badge>
        </IconButton>
        <p>Profile</p>
      </MenuItem>

      {/* Settings */}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <SettingsRoundedIcon />
        </IconButton>
        <p>Settings</p>
      </MenuItem>
    </Menu>
  );


  // aca termina la version mobile

  return (
    <div className={classes.grow}>
      <AppBar style={{ backgroundColor: '#202020' }} position="static">
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
            <Link style={{ textDecoration: 'none', color: 'white', fontFamily: 'Trade Winds', marginLeft: '22px' }} to='/'> Funko's Store </Link>
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

            {/* github signIn */}
            {/*  <Link to="/login" style={{ textDecoration: 'none', color: 'white' }} >
              <IconButton aria-label="show 0 new mails" color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <GitHubIcon />
                </Badge>
              </IconButton>
            </Link> */}

            {/* home */}
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }} >
              <IconButton aria-label="show 0 new notifications" color="inherit">
                <Badge badgeContent={order.length} color="secondary">
                  <ShopTwoIcon />
                </Badge>
              </IconButton>
            </Link>

            {/* carrito 2 */}

            {userId ? <Link to='/UserCart' style={{ textDecoration: 'none', color: 'inherit' }} >
              <IconButton aria-label="show 0 new notifications" color="inherit">
                <Badge badgeContent={order.length} color="primary">
                  <ShoppingCartRoundedIcon />
                </Badge>
              </IconButton>
            </Link> : <Link to='/GuestCart' style={{ textDecoration: 'none', color: 'inherit' }} >
                <IconButton aria-label="show 0 new notifications" color="inherit">
                  <Badge badgeContent={order.length} color="primary">
                    <ShoppingCartRoundedIcon />
                  </Badge>
                </IconButton>
              </Link>}


            {/* user */}
            <IconButton
              aria-label="show 0 new notifications"
              aria-controls={menuId}
              onClick={handleLoggedUserMenu}
              color="inherit"
            >
              {/* <AccountCircle /> */}
              <AccountCircleIcon />
            </IconButton>


            {/* la tuerquitas visteSSS */}
            {isAdmin ? <IconButton
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
            </IconButton> : null}



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




          <SearchBar classes={classes} />

        </Toolbar>
      </AppBar>
      { renderMobileMenu}
      { renderUserMenu}
      { renderMenu}

    </div >
  );
}
