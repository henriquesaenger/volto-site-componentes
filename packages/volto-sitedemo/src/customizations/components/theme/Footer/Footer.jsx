import React, { useEffect, useState } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { useSelector, shallowEqual } from 'react-redux';
import LogoProcergs from '../../../../components/LogoProcergs/LogoProcergs';
import SeloGoverno from '../../../../components/SeloGoverno/SeloGoverno';
import { default as Sitemap } from '../../../../components/SiteMapFooter/SiteMapFooter';

const Footer = ({ intl }) => {
  const navRoot = useSelector((state) => state.navroot?.data?.navroot);

  return (
    <Segment id="footer" vertical padded inverted color="grey">
      <Sitemap location="" />
      {/* <SeloGoverno /> */}
      <LogoProcergs />
    </Segment>
  );
};

export default injectIntl(Footer);
