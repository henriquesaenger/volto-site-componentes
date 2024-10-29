import ListaTelefones from './components/ListaTelefones/ListaTelefones';

//Locais
import LocalView from './components/Views/Local';
import LocaisBlockEdit from './components/Blocks/LocaisBlock/Edit';
import LocaisBlockView from './components/Blocks/LocaisBlock/View';
import locaisSVG from '@plone/volto/icons/home.svg';

//reducers
import defaultReducers from '@plone/volto/reducers';
import locais from './reducers/locais/locais';

const applyConfig = (config) => {
  config.widgets.widget.lista_telefones = ListaTelefones;

  config.views.contentTypesViews = {
    ...config.views.contentTypesViews,
    Local: LocalView,
  };

  //Bloco Locais
  config.blocks.blocksConfig.locaisBlock = {
    id: 'locaisBlock',
    title: 'Listagem de Locais',
    group: 'procergs',
    icon: locaisSVG,
    edit: LocaisBlockEdit,
    view: LocaisBlockView,
    sidebarTab: 1,
  };

  /// Grupos de Blocos
  config.blocks.groupBlocksOrder = [
    ...config.blocks.groupBlocksOrder,
    { id: 'procergs', title: 'Procergs' },
  ];

  // Reducers
  const localReducers = {
    ...defaultReducers,
    locais,
  };
  config.addonReducers = { ...config.addonReducers, ...localReducers };

  return config;
};

export default applyConfig;
