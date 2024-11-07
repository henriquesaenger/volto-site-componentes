import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBox,
  faBoxArchive,
  faCircleHalfStroke,
  faCookie,
  faEnvelope,
  faMailBulk,
  faMailForward,
  faSitemap,
  faUniversalAccess,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const BarraAcessibilidade = () => {
  const [theme, setTheme] = useState('light');

  const toogleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="acess-wrapper">
      <div className="acess-right">
        <ul className="acess-ul">
          <li>
            <a accessKey="1" title="Ir para o conteúdo">
              Conteúdo [1]
            </a>{' '}
          </li>
          <li>
            <a accessKey="2" title="Ir para o menu">
              Menu [2]
            </a>{' '}
          </li>
          <li>
            <a accessKey="3" title="Ir para a busca">
              Busca [3]
            </a>{' '}
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={faUniversalAccess} /> Acessibilidade
            </a>
          </li>
        </ul>
      </div>
      <div className="acess-left">
        <ul className="acess-ul">
          <li>
            <a
              title={theme === 'light' ? 'Contraste normal' : 'Alto Contraste'}
              onClick={toogleTheme}
            >
              <FontAwesomeIcon
                icon={faCircleHalfStroke}
                flip={theme === 'light' ? undefined : 'horizontal'}
              />{' '}
            </a>
          </li>
          <li>
            <a href="">
              <FontAwesomeIcon icon={faCookie} />
            </a>
          </li>
          <li>
            <a href="/contact-form">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
          <li>
            <Link to="/sitemap">
              <FontAwesomeIcon icon={faSitemap} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BarraAcessibilidade;
