import { Button } from "react-bootstrap";
const Header = () => {
  return (
    <>
      <h1 className="text-center mt-5 ">Products List</h1>
      <div className="text-center container">
        <div className="row">
          <Button
            className="btn rounded me-2 text-black bg-light-subtle me-2 col-12 col-md-1 "
            href="#"
          >
            ALL
          </Button>
          <Button
            className="btn rounded me-2 text-black bg-light-subtle me-2 col-12 col-md-2 "
            href="#"
          >
            ELECTRONİCS
          </Button>
          <Button
            className="btn rounded me-2 text-black bg-light-subtle me-2 col-12 col-md-2"
            href="#"
          >
            jEWELERY
          </Button>
          <Button
            className="btn rounded me-2 text-black bg-light-subtle me-2 col-12 col-md-2"
            href="#"
          >
            MEN'S CLOTHİNG
          </Button>
          <Button
            className="btn rounded me-2 text-black bg-light-subtle me-2 col-12 col-md-2"
            href="#"
          >
            WOMEN'S CLOTHİNG
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
