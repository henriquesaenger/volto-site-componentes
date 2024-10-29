import React, { div, useEffect, useState } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { useSelector, shallowEqual } from 'react-redux';
import LogoProcergs from '../../../../components/LogoProcergs/LogoProcergs';
import SeloGoverno from '../../../../components/SeloGoverno/SeloGoverno';
import Endereco from '../../../../components/Endereco/Endereco';

const Footer = ({ intl }) => {
  const site = useSelector((state) => state.site.data);
  const navRoot = useSelector((state) => state.navroot?.data?.navroot);
  const local = navRoot?.local?.data;

  return (
    <div id="footer" stackable vertical padded inverted color="grey">
      <div className="footer-container">
        <div className="footer-site-nome">{site['plone.site_title']}</div>
        <div className="footer-info">
          {/* <InformacoesContato content={site}/> */}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
            tempore iure in voluptate fugiat totam provident voluptates deserunt
            veritatis accusamus, nulla doloremque fugit quis ipsum maiores
            quibusdam nam recusandae facilis.
          </p>
          <SeloGoverno />
        </div>
      </div>
      <div className="footer-logo">
        <LogoProcergs />
      </div>
    </div>
  );
};

export default injectIntl(Footer);
