import { defineMessages } from 'react-intl';

const messages = defineMessages({
  title: {
    id: 'Locais',
    defaultMessage: 'Locais',
  },
  headline: {
    id: 'Cabeçalho',
    defaultMessage: 'Cabeçalho',
  },
});

export const locaisSchema = (props) => {
  return {
    title: props.intl.formatMessage(messages.title),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['headline'],
      },
    ],
    properties: {
      headline: {
        title: props.intl.formatMessage(messages.headline),
      },
    },
    required: ['headline'],
  };
};
