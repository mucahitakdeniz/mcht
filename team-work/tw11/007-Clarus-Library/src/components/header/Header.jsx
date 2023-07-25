import { useState } from "react";

const Header = ({ setInput, setType, type }) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState("all");

  // const handleOptionChange = (option) => {
  //   setSelectedOption(option);
  // };

  const option = ["all", "books", "magazines"];
  const [change, setChange] = useState("");
  const [t, setT] = useState(type);

  // const handleDropDown = (option) => {
  //   setT(option);
  //   setType(option); // Türü ana bileşende değiştirmek için setType kullanın
  // };

  const handleSearch = (e) => {
    e.preventDefault();
    setInput(change);
    setType(t); // Türü değiştirmek için t state'ini kullanın
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
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>

        {/* <div className="dropdown">
          <button
            className="dropdown-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedOption}
          </button>
          {isOpen && (
            <ul className="dropdown-menu">
              {option.map((option, index) => (
                <li key={index}>
                  <button >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div> */}

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
