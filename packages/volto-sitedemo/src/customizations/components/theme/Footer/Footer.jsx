import React, { useEffect, useState } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { useSelector, shallowEqual } from 'react-redux';
import LogoProcergs from '../../../../components/LogoProcergs/LogoProcergs';
import SeloGoverno from '../../../../components/SeloGoverno/SeloGoverno';
import InformacoesContato from '../../../../components/InformacoesContato/InformacoesContato';

const Footer = ({ intl }) => {
  const site = useSelector((state) => state.site.data);
  const navRoot = useSelector((state) => state.navroot?.data?.navroot);
  const local = navRoot?.local;

  return (
    <Segment id="footer" vertical padded inverted color="grey">
      {site['plone.site_title']}

      {/* <InformacoesContato content={site}/> */}
      {/* <SeloGoverno /> */}
      <LogoProcergs />
    </Segment>
  );
};

export default injectIntl(Footer);
