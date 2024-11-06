import React from 'react';

const Contato = ({ content }) => {
  const {
    email,
    fax,
    telefone_fax,
    tel_comercial,
    tel_celular,
    voip,
    skype,
    whatsapp,
    url,
    horarios,
    link_whatsapp,
    telefones,
  } = content;

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

export default Contato;
