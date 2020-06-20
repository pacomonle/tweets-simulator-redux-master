import React from "react";
// imports Bootstrap
import { Modal as ModalB } from "react-bootstrap";
// hooks de react-redux
import { useDispatch, useSelector } from "react-redux";
// import action del reducer
import { openCloseAddTweetModalAction } from "../actions/modalsActions";

export default function Modal(props) {
  // los children son quienes renderizan el modal 
  // asi tenemos un modal reutilizable
  const { children } = props;

  // Dispatch para ejecutar nuestras acciones
  const dispatch = useDispatch();
  const closeModal = (state) => dispatch(openCloseAddTweetModalAction(state));

  // useSelector para aceder a un valor del state en el store
  const isOpenModal = useSelector(state => state.modals.stateModalAddTweet);

  return (
    <ModalB
      show={isOpenModal}
      onHide={() => closeModal(false)}
      size="lg"
      centered
    >
      {children}
    </ModalB>
  );
}
