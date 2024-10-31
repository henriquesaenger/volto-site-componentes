import React from 'react';
import { div } from 'semantic-ui-react';

const Endereco = ({ content }) => {
  const {
    logradouro,
    complemento,
    cidade,
    estado,
    cep,
    numero,
    bairro,
    coordenadas,
  } = content;

  return (
    <div className="endereco-wrapper">
      <div>
        {logradouro && (
          <>
            <span className="logradouro">{logradouro}</span>
            {numero && <span className="numero">, {numero}</span>}
          </>
        )}
      </div>
      <div>
        {complemento && <span className="complemento">{complemento}</span>}
      </div>
      <div>{bairro && <span className="bairro">{bairro}</span>}</div>
      <div>{cep && <span className="cep">{cep}</span>}</div>
      <div>
        {cidade && (
          <>
            <span className="cidade">{cidade}</span>
            {estado && <span className="estado"> - {estado.token}</span>}
          </>
        )}
      </div>
      {coordenadas && (
        <div>
          <a
            href={`https://www.google.com/maps?q=${coordenadas}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver no Google Maps
          </a>
        </div>
      )}
    </div>
  );
};

export default Endereco;
