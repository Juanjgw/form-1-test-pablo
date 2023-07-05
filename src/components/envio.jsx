import React, { useState } from 'react'
import ModalControl from './controls/modalControl'
import { Form } from 'react-bootstrap'

const Envio = ({ open, handleClose, handleSubmit }) => {
  const [optionSelected, setOptionSelected] = useState("courier1");

  const handleSend = () => {
    handleSubmit(optionSelected);
  }

  const handleChange = (event) => {
    setOptionSelected(event.target.value);
  }
  
  return (
    <ModalControl
      open={open}
      title={"Empresa de envio"}
      handleClose={handleClose}
      handleSubmit={handleSend}
    >
      <Form>
        <Form.Check
          type="radio"
          id="courier1"
          label="Courier 1"
          name="radioGroup"
          value="courier1"
          checked={optionSelected === "courier1"}
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          id="courier2"
          label="Courier 2"
          name="radioGroup"
          value="courier2"
          checked={optionSelected === "courier2"}
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          id="courier3"
          label="Courier 3"
          name="radioGroup"
          value="courier3"
          checked={optionSelected === "courier3"}
          onChange={handleChange}
        />
      </Form>
    </ModalControl>
  )
}
export default Envio
