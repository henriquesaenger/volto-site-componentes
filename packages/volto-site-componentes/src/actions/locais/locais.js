import { LIST_LOCAIS } from '../../constants/ActionTypes';

export function listLocais() {
  return {
    type: LIST_LOCAIS,
    request: {
      op: 'get',
      path: '@locais',
    },
  };
}
