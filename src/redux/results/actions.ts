import { Result } from "./resultsReducer";

type AddResultProps = Result

export const actions = {
  ADD_RESULT: "ADD_RESULT",
  DELETE_RESULTS: "DELETE_RESULTS",
};

export const addResult = ({title, answer}: AddResultProps) => ({
  type: actions.ADD_RESULT,
  title,
  answer,
});

export const deleteResult = () => ({
  type: actions.DELETE_RESULTS,
});
