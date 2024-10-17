import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';

const InformacoesContato = ({ props }) => {
  const navRoot = useSelector((state) => state.navroot?.data?.navroot);
  const site = useSelector((state) => state.site.data);

  return (
    <>
      {navRoot ? (
        <Container className="informacoes-contato">
          {site['plone.site_title']}
          {navRoot.logradouro && <div>{navRoot.logradouro}</div>}
          {navRoot.complemento && <div>{navRoot.complemento}</div>}
          {navRoot.cidade && <div>{navRoot.cidade}</div>}
          {navRoot.coordenadas && (
            <div>
              <a
                href={'https://www.google.com/maps?q=${navRoot.coordenadas}'}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver no Google Maps
              </a>
            </div>
          )}
          {navRoot.email && <div>{navRoot.email}</div>}
        </Container>
      ) : null}
    </>
  );
};

export default InformacoesContato;
