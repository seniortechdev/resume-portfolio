import defaultState from './defaultState';
import { GET_EXPERIENCE } from './actions';


const experiencesReducer = (state = defaultState, action: { type: any; }) => {
  switch (action.type) {
    case GET_EXPERIENCE:
      return [
        ...state,
      ];
    default:
      return state;
  }
};

export default experiencesReducer;