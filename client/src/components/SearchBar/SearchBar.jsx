import React, {useState} from "react";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { Link } from "react-router-dom";

const SearchBar = ({classes}) => {
  const [query, setQuery] = useState({
    query: ""
  });
  

 
  function onChange(e){
    setQuery({
      ...query,
      [e.target.name] : e.target.value
    })
  }

  
  
  return ( 
    <>
      <div className={classes.search}>           
      
      <InputBase
      placeholder="          Search…"
      classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
      }}
      name="query"
      inputProps={{ 'aria-label': 'search' }}
      onChange={onChange}
      />
      <Link to={`/products/search/${query.query}`}  >
        <SearchIcon style={{paddingTop: '5px', color: 'white', height: '20px'}} />
        </Link>
      
     </div>
    </>
  );
}

export default SearchBar;

