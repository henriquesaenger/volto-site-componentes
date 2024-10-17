import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import LogoImage from './logo_Procergs.png';
import { Container } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';

const LogoProcergs = () => {
  return (
    <Container className="footer-barra-procergs">
      <UniversalLink to="http://www.procergs.rs.gov.br/">
        <Image src={LogoImage} alt="Visite o site da PROCERGS" />
      </UniversalLink>

      <Link to="/termos-de-uso">Termos de Uso</Link>
    </Container>
  );
};

export default LogoProcergs;
