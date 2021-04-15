import results, {
  initialState as resultsInitialState,
} from "./results/resultsReducer";

const rootReducer = {
  results,
};

export const exampleInitialState = {
  results: resultsInitialState,
};

export default rootReducer;
