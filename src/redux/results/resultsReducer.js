import { actions } from "./actions";

export const initialState = {
  allResults: [],
};

const resultReduser = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_RESULT: {
      const updatedResults = [
        ...state.allResults,
        { title: action.title, answer: action.answer },
      ];
      return { ...state, allResults: updatedResults };
    }
    case actions.DELETE_RESULTS: {
      return { ...state, allResults: [] };
    }
    default:
      return state;
  }
};

export default resultReduser;
