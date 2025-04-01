import { LIST_LOCAIS } from '../../constants/ActionTypes';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function locais(state = initialState, action = {}) {
  switch (action.type) {
    case `${LIST_LOCAIS}_PENDING`:
      return {
        ...state,
        data: [],
        error: null,
        loading: true,
      };
    case `${LIST_LOCAIS}_SUCCESS`:
      return {
        ...state,
        data: action.result.items,
        error: null,
      };
    case `${LIST_LOCAIS}_FAIL`:
      return {
        ...state,
        data: [],
        error: action.error.response.error,
      };
    default:
      return state;
  }
}
