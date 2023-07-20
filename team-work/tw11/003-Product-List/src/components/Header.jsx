import { Button } from "react-bootstrap";
const Header = () => {
  return (
    <>
      <h1 className="text-center mt-5 ">Products List</h1>
      <div className="text-center  b ">
        <Button
          className="rounded me-2 text-black bg-light-subtle me-2 "
          href="#"
        >
          ALL
        </Button>
        <Button
          className="rounded me-2 text-black bg-light-subtle me-2 "
          href="#"
        >
          ELECTRONİCS
        </Button>
        <Button
          className="rounded me-2 text-black bg-light-subtle me-2 "
          href="#"
        >
          jEWELERY
        </Button>
        <Button
          className="rounded me-2 text-black bg-light-subtle me-2 "
          href="#"
        >
          MEN'S CLOTHİNG
        </Button>
        <Button
          className="rounded me-2 text-black bg-light-subtle me-2 "
          href="#"
        >
          WOMEN'S CLOTHİNG
        </Button>
      </div>
    </>
  );
};

export default Header;
