import React from 'react';
import { Container } from 'semantic-ui-react';

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
    <Container className="endereco-wrapper">
      <Container>
        {logradouro && (
          <>
            <span className="logradouro">{logradouro}</span>
            {numero && <span className="numero">, {numero}</span>}
          </>
        )}
      </Container>
      <Container>
        {complemento && <span className="complemento">{complemento}</span>}
      </Container>
      <Container>
        {bairro && <span className="bairro">{bairro}</span>}
      </Container>
      <Container>{cep && <span className="cep">{cep}</span>}</Container>
      <Container>
        {cidade && (
          <>
            <span className="cidade">{cidade}</span>
            {estado && <span className="estado"> - {estado.token}</span>}
          </>
        )}
      </Container>
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
    </Container>
  );
};

export default Endereco;
