import React, { useState } from 'react';
import Envio from './envio';
import { calculateVolume } from '../utils/calcs';
import { Alert } from 'react-bootstrap';

const defaultParams = {
  alto : 0,
  ancho : 0,
  profundidad: 0
}

const FormCalculo = () => {
  const [params, setParams] = useState(defaultParams);
  const [modalOpen, setModalOpen] = useState(false);
  const [showAlert, setShowAlert] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const handleChange = (e) => {
    setParams({
      ...params,
      [e.target.id] : e.target.value
    });
  }

  const handleSubmitModal = (courier) => {
    //console.log("aceptar modal!");
    let volume = calculateVolume(params);
    setShowAlert(`Volumen (m3): ${volume}, Empresa: ${courier}`)
    setModalOpen(false);
  }

  const handleCloseModal = () => {
    console.log("cancelar");
    setModalOpen(false);
  }

  return (
    <div className="container m-2 vh-100">
      {
        modalOpen && 
        <Envio
          open={modalOpen}
          handleSubmit={handleSubmitModal}
          handleClose={handleCloseModal}
        />
      }
      <div className="row justify-content-center">
        <div className="col-6 m-2">
        <div className="card w-100">
            <h5 className="card-header">Formulario</h5>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="alto" className="form-label">
                  Alto:
                </label>
                <input
                  type="number"
                  id="alto"
                  className="form-control"
                  default
                  value={params.alto}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="ancho" className="form-label">
                  Ancho:
                </label>
                <input
                  type="number"
                  id="ancho"
                  className="form-control"
                  value={params.ancho}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="profundidad" className="form-label">
                  Profundidad:
                </label>
                <input
                  type="number"
                  id="profundidad"
                  className="form-control"
                  value={params.profundidad}
                  onChange={handleChange}
                />
              </div>
              <div className="d-grid gap-2">
                <button 
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  >
                  Calcular
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-6 m-2">
          {
            showAlert !== "" && (
            <Alert variant="success" onClose={() => setShowAlert("")} dismissible>
              {showAlert}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormCalculo;
