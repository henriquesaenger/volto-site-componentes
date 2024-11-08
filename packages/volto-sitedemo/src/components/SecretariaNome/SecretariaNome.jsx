import React from 'react';

const SecretariaNome = ({ content }) => {
  console.log('Content:', content);
  const { local, nome_secretaria_vinculada, url_secretaria_vinculada } =
    content;

  return (
    <div className="secretaria-wrapper">
      <div>
        {nome_secretaria_vinculada && (
          <span className="secretaria-nome">{nome_secretaria_vinculada}</span>
        )}
      </div>
    </div>
  );
};

export default SecretariaNome;
