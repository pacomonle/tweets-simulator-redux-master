import React from "react";
// imports Bootstrap
import { Container, Navbar, Button } from "react-bootstrap";
// import hook de redux
import { useDispatch } from "react-redux";
// import reducer modal
import { openCloseAddTweetModalAction } from "../actions/modalsActions";
// import del logo 
import LogoRedux from "../assets/img/redux.png";

const Menu = () => {
  // Dispatch para ejecutar nuestras acciones.
  const dispatch = useDispatch();
  const openCloseAddTweetModal = state =>
    dispatch(openCloseAddTweetModalAction(state));
// actualizar el state del reducer de modal
  const openModal = () => {
    openCloseAddTweetModal(true);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img
            alt="Tweets Simulator Redux"
            src={LogoRedux}
            width="30"
            height="30"
            className="d-inline-block aling-top mr-4"
          />
          Tweets Simulator REDUX
        </Navbar.Brand>
        <Button variant="outline-success" onClick={openModal}>
          Nuevo Tweet
        </Button>
      </Container>
    </Navbar>
  );
}

export default Menu