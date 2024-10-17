import React from 'react';
import { Container, Segment } from 'semantic-ui-react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { useSelector, shallowEqual } from 'react-redux';
import LogoProcergs from '../../../../components/LogoProcergs/LogoProcergs';
import SeloGoverno from '../../../../components/SeloGoverno/SeloGoverno';
import InformacoesContato from '../../../../components/InformacoesContato/InformacoesContato';

const Footer = ({ intl }) => {
  return (
    <Segment id="footer" vertical padded inverted color="grey">
      <InformacoesContato />
      {/* <SeloGoverno /> */}
      <LogoProcergs />
    </Segment>
  );
};

export default injectIntl(Footer);
