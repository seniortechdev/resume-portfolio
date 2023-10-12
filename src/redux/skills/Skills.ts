import defaultState from './defaultState';
import { GET_SKILLS } from './actions';


const skillsReducer = (state = defaultState, action: { type: any; }) => {
  switch (action.type) {
    case GET_SKILLS:
      return [
        ...state,
      ];
    default:
      return state;
  }
};

export default skillsReducer;