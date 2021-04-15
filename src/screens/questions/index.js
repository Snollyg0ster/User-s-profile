import { Link } from "react-router-dom";
import QuestionCont from "../../components/questionCont";
import "./styles.css";

function QuestionsScreen() {
  return (
    <div className="App-header">
      <label id="testTitle">Ask all the questions</label>
      <QuestionCont />
    </div>
  );
}

export default QuestionsScreen;
