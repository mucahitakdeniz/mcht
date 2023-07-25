import { useState } from "react";

const Header = ({ setInput, setType, type }) => {
  const option = ["all", "books", "magazines"];
  const [change, setChange] = useState("");
  const [t, setT] = useState(type);
  const handleDropDown = (option) => {
    setT(option);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setInput(change);
    setType(t);
  };
  return (
    <div className="container text-center">
      <h1 className="text-center">BOOKS OR MAGAZİNES</h1>
      <form onSubmit={handleSearch} class="d-flex " role="search">
        <input
          class="form-control me-2 w-50"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={change}
          onChange={(e) => setChange(e.target.value)}
        />

        <ul style={{ listStyleType: "none" }}>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {type}
            </a>
            <ul class="dropdown-menu">
              {option.map((option, i) => {
                return (
                  <li key={i}>
                    <a
                      onClick={() => handleDropDown(option)}
                      class="dropdown-item"
                      href="#"
                    >
                      {option}
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
        <button class="btn btn-outline-success ms-3 " type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Header;
