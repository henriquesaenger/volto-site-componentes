import React from 'react';
import { UniversalLink } from '@plone/volto/components';
import { div } from 'semantic-ui-react';
import SimboloRS from './simbolo_RS.png';

const SeloGoverno = () => {
  return (
    <div className="simboloRS">
      <UniversalLink href="https://www.estado.rs.gov.br" target="_self">
        <img
          src={SimboloRS}
          alt="RS.GOV - Novas façanhas"
          className="simboloRS"
        />
      </UniversalLink>
    </div>
  );
};

export default SeloGoverno;
