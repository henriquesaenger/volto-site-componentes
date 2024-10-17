import ListaTelefones from './components/ListaTelefones/ListaTelefones';

const applyConfig = (config) => {
  config.widgets.widget.lista_telefones = ListaTelefones;

  return config;
};

export default applyConfig;
