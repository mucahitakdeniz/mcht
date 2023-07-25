import { useState } from "react";

const Header = ({ setInput, setType, type }) => {
  const option = ["all", "books", "magazines"];
  const [change, setChange] = useState("");
  const [t, setT] = useState(type);

  const handleSearch = (e) => {
    e.preventDefault();
    setInput(change);
    setType(t); 
    setChange("");
  };

  return (
    <div className="container text-center">
      <h1 className="text-center">BOOKS OR MAGAZİNES</h1>
      <form class="d-flex " role="search">
        <input
          class="form-control me-2 w-50"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={change}
          onChange={(e) => setChange(e.target.value)}
        />
       

        <select name="cars" id="cars">
          {option.map((op,i) => (
            <option key={{i}} value="all" onClick={()=>setT(op)}>{op}</option>
          ))}
        </select>

        <button
          onClick={handleSearch}
          class="btn btn-outline-success ms-3 "
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Header;
