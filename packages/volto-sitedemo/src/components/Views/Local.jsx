import React from 'react';
import { Container } from 'semantic-ui-react';
import Endereco from '../Endereco/Endereco';

const LocalView = (props) => {
  const { content, location } = props;

  return (
    <Container id="page-document" className="view-wrapper local-view">
      <Endereco content={content} />
      {content && <h2>{content.description}</h2>}
    </Container>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
/** LocalView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    email: PropTypes.string,
    telefone: PropTypes.string,
    endereco: PropTypes.string,
    complemento: PropTypes.string,
    cidade: PropTypes.string,
    estado: PropTypes.string,
    cep: PropTypes.string,
  }).isRequired,
}; */

export default LocalView;
