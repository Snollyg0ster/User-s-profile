import { actions } from "./actions";

export interface Result {
  title: string
  answer: string
}

export interface ResultsState {
  allResults: Result[],
};

export const initialState: ResultsState = {
  allResults: [],
};

const resultReduser = (state = initialState, action: any) => {
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
