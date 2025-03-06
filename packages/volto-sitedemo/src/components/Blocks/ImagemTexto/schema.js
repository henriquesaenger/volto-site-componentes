import { defineMessages } from 'react-intl';

const messages = defineMessages({
  title: {
    id: 'Imagem com descrição',
    defaultMessage: 'Imagem com descrição',
  },
  description: {
    id: 'Exibe uma imagem com descrição em bloco',
    defaultMessage: 'Exibe uma imagem com descrição em bloco',
  },
  image_title: {
    id: 'Imagem',
    defaultMessage: 'Imagem',
  },
  image_description: {
    id: 'Imagem a ser exibida',
    defaultMessage: 'Imagem a ser exibida',
  },
  image_position_title: {
    id: 'Posição',
    defaultMessage: 'Posição',
  },
  image_position_description: {
    id: 'Posição da imagem',
    defaultMessage: 'Posição da imagem',
  },
  image_position_choices_left: {
    id: 'Esquerda',
    defaultMessage: 'Esquerda',
  },
  image_position_choices_right: {
    id: 'Direita',
    defaultMessage: 'Direita',
  },
  image_description_title: {
    id: 'Descrição',
    defaultMessage: 'Descrição',
  },
  image_description_description: {
    id: 'Descrição da imagem a ser exibida',
    defaultMessage: 'Descrição da imagem a ser exibida',
  },
  background_color_title: {
    id: 'Cor de fundo',
    defaultMessage: 'Cor de fundo',
  },
});

export const imagemTextoSchema = (props) => {
  return {
    title: props.intl.formatMessage(messages.title),
    description: props.intl.formatMessage(messages.description),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: [
          'image',
          'image_position',
          'image_description',
          'background_color',
        ],
      },
    ],
    properties: {
      image: {
        title: props.intl.formatMessage(messages.image_title),
        description: props.intl.formatMessage(messages.image_description),
        widget: 'image',
      },
      image_position: {
        title: props.intl.formatMessage(messages.image_position_title),
        description: props.intl.formatMessage(
          messages.image_position_description,
        ),
        choices: [
          [
            'left',
            props.intl.formatMessage(messages.image_position_choices_left),
          ],
          [
            'right',
            props.intl.formatMessage(messages.image_position_choices_right),
          ],
        ],
        type: 'string',
        default: 'right',
      },
      image_description: {
        title: props.intl.formatMessage(messages.image_description_title),
        description: props.intl.formatMessage(
          messages.image_description_description,
        ),
        widget: 'textarea',
      },
      background_color: {
        title: props.intl.formatMessage(messages.background_color_title),
        widget: 'color_picker',
        colors: [
          { name: 'transparent', label: 'Transparente' },
          { name: 'grey', label: 'Cinza' },
        ],
        default: 'grey',
      },
    },
    required: [
      'image',
      'image_position',
      'image_description',
      'background_color',
    ],
  };
};
