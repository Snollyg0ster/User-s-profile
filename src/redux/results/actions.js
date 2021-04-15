export const actions = {
  ADD_RESULT: "ADD_RESULT",
  DELETE_RESULTS: "DELETE_RESULTS",
};

export const addResult = (title, answer) => ({
  type: actions.ADD_RESULT,
  title,
  answer,
});

export const deleteResult = () => ({
  type: actions.DELETE_RESULTS,
});
