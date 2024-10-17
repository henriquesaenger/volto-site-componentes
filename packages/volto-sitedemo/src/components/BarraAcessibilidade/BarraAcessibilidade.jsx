import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleHalfStroke,
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
    <div className="wrapper__cabecalho__funcionalidades">
      <div className="ui container">
        <div className="header">
          <ul className="logo-nav-wrapper horizontal-list">
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
          </ul>
          <ul className="tools-search-wrapper horizontal-list">
            <li>
              <a>
                <FontAwesomeIcon icon={faUniversalAccess} /> Acessibilidade
              </a>
            </li>
            <li>
              <a
                title={
                  theme === 'light' ? 'Contraste normal' : 'Alto Contraste'
                }
                onClick={toogleTheme}
              >
                <FontAwesomeIcon
                  icon={faCircleHalfStroke}
                  flip={theme === 'light' ? undefined : 'horizontal'}
                />{' '}
                Contraste
              </a>
            </li>
            <li>
              <Link to="/sitemap">
                <FontAwesomeIcon icon={faSitemap} /> Mapa do site
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BarraAcessibilidade;
