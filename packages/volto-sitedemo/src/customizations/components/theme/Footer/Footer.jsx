import React, { div, useEffect, useState } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { useSelector, shallowEqual } from 'react-redux';
import LogoProcergs from '../../../../components/LogoProcergs/LogoProcergs';
import SeloGoverno from '../../../../components/SeloGoverno/SeloGoverno';
import Endereco from '../../../../components/Endereco/Endereco';
import Contato from '../../../../components/Contato/Contato';
import SitemapComponent from '../../../../components/SitemapComponent/SitemapComponent';
import SecretariaNome from '../../../../components/SecretariaNome/SecretariaNome';

const Footer = ({ intl }) => {
  const site = useSelector((state) => state.site.data);
  const navRoot = useSelector((state) => state.navroot?.data?.navroot);
  const local = navRoot?.local?.data;

  return (
    <div id="footer" stackable vertical padded inverted color="grey">
      <div className="footer-container">
        <div className="footer-site-nome">
          <SeloGoverno />
        </div>
        <div className="footer-info">
          <div>
            {Endereco && local && <Endereco content={local} />}
            {Contato && local && <Contato content={local} />}
          </div>
          <SitemapComponent />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            nulla eaque obcaecati explicabo nemo fuga. Nesciunt, dicta ratione?
            Id commodi similique veritatis dolor quae modi porro. Magni
            exercitationem facilis quae.
          </p>
        </div>
      </div>
      <div className="footer-logo">
        <p>
          Todo o conteúdo deste site está publicado sob a licença Creative
          Commons Atribuição-SemDerivações 3.0 Não Adaptada
        </p>
      </div>
    </div>
  );
};

export default injectIntl(Footer);
