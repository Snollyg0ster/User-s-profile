import results, {
  initialState as resultsInitialState, ResultsState
} from "./results/resultsReducer";

const rootReducer = {
  results,
};

export interface DefaultRootState {
  results: ResultsState,
};

export const exampleInitialState: DefaultRootState = {
  results: resultsInitialState,
};

export default rootReducer;
