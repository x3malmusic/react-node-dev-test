import React, { useEffect } from "react";
import { Navbar, ButtonGroup, Button, Nav, Image } from "react-bootstrap";
import GoogleBtn from "../Containers/GoogleBtn";

const buttons = [
  { name: "User Name", id: 1, value: "name" },
  { name: "Email", id: 2, value: "email" },
  { name: "City", id: 3, value: "address.city" },
  { name: "Website", id: 4, value: "website" },
];

function AppHeader(props) {
  const { sortBy, loggedIn, firstName, lastName, avatar } = props;

  const filter = (e) => {
    sortBy(e.target.value);
  };

  useEffect(() => {
    sortBy(buttons[0].value);
  }, [sortBy]);

  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <h3>Sort by</h3>
        <ButtonGroup>
          {buttons.map((b) => (
            <Button
              variant="secondary"
              value={b.value}
              key={b.id}
              onClick={(e) => filter(e)}
            >
              {b.name}
            </Button>
          ))}
        </ButtonGroup>
      </Nav>
      {loggedIn && (
        <Navbar.Text>
          Signed in as: <strong>{`${firstName} ${lastName}`}</strong>
        </Navbar.Text>
      )}
      {loggedIn && <Image src={avatar} roundedCircle />}
      <GoogleBtn />
    </Navbar>
  );
}

export default AppHeader;
