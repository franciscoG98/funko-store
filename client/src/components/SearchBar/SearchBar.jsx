// import React, { useState } from "react";

// const SearchBar = ({onSearch}) => {
//   const [funko, setFunko] = useState("");
//   return (
//     <form onSubmit={(e) => {
//       e.preventDefault();
//       onSearch(funko);
//     }}>
//       <input
//         type="text"
//         placeholder="Funko..."
//         value={funko}
//         onChange={e => setFunko(e.target.value)}
//       />
//       <input type="submit" value="Search" />
//     </form>
//   );
// }

// export default SearchBar;


// import React, { useState } from "react";
import React from "react";

import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const SearchBar = ({classes}) => {

  
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
      placeholder="          Search…"
      classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
      }}
      inputProps={{ 'aria-label': 'search' }}
      />
      
  </div>
  );
}

export default SearchBar;

