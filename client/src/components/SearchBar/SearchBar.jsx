import React, { useState } from "react";

const SearchBar = ({onSearch}) => {
  const [funko, setFunko] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(funko);
    }}>
      <input
        type="text"
        placeholder="Funko..."
        value={funko}
        onChange={e => setFunko(e.target.value)}
      />
      <input type="submit" value="Search" />
    </form>
  );
}

export default SearchBar;
