import { useState } from "react";
function SearchBar(props) {
  let [searchTerm, setSearchTerm] = useState("");

  const internalSearch = (e) => {
    props.handleSearch(e, searchTerm);
    // setSearchTerm("");
  };

  return (
    <form onSubmit={(e) => internalSearch(e)}>
      <input
        value={searchTerm}
        id="search_bar"
        type="text"
        placeholder="Enter a search term here"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* <input type="submit" /> */}
    </form>
  );
}

export default SearchBar;

// import { useState } from "react";

// function SearchBar(props) {
//   // We can comment out our searchTerm state variable as we are not using it!
//   // let [searchTerm, setSearchTerm] = useState('')

//   return (
//     <form>
//       <input
//         type="text"
//         placeholder="Search Here"
//         onChange={(e) => props.handleSearch(e, e.target.value)}
//       />
//       {/* <input type="submit" /> */}
//     </form>
//   );
// }

// export default SearchBar;
