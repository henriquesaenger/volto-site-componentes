import ListaTelefones from './components/ListaTelefones/ListaTelefones';
import LocalView from './components/Views/Local';

const applyConfig = (config) => {
  config.widgets.widget.lista_telefones = ListaTelefones;

  config.views.contentTypesViews = {
    ...config.views.contentTypesViews,
    Local: LocalView,
  };

  return config;
};

export default applyConfig;
