import React, { useEffect, useState } from 'react';
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
    <Segment id="footer" vertical padded inverted color="grey">
      {site['plone.site_title']}

      {local && <Endereco content={local} />}
      {/* <SeloGoverno /> */}
      <LogoProcergs />
    </Segment>
  );
};

export default injectIntl(Footer);
