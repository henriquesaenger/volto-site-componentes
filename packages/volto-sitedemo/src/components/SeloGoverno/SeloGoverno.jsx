import React from 'react';
import { UniversalLink } from '@plone/volto/components';
import { div } from 'semantic-ui-react';

const SeloGoverno = () => {
  return (
    <div className="footer-selo-governo">
      <UniversalLink href="https://www.estado.rs.gov.br" target="_self">
        <img
          src="https://www.estado.rs.gov.br/matriz_common/images/logos/marca_governo_RS.png"
          alt="RS.GOV - Novas façanhas"
          className="selo-governo--padrao"
        />
      </UniversalLink>
    </div>
  );
};

export default SeloGoverno;
