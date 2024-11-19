import React from 'react';
import FormPart from './FormulairePart/FormPart';
import CardPart from './CardPart/CardPart';
import './FormContainer.css';

function FormContainer() {
  return (
    <div className="container-p">
      <FormPart />
      <CardPart />
    </div>
  );
}

export default FormContainer;
