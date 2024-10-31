import React from 'react';

const Telefone = ({ content }) => {
  const { tel_comercial, tel_celular } = content;

  return (
    <div className="telefone-wrapper">
      <div>
        {tel_comercial && (
          <span className="telefone-tel_comercial">{tel_comercial}</span>
        )}
      </div>
      <div>
        {tel_celular && (
          <span className="telefone-tel_celular">{tel_celular}</span>
        )}
      </div>
    </div>
  );
};

export default Telefone;
