import React, { useEffect, useState } from "react";
import "./styles.css";
import Questions from "./../../constants/index";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addResult } from "../../redux/results/actions";

const QuestionCont = () => {
  const [number, setNumber] = useState(0);
  const [question, setQuestion] = useState(Questions[number]);
  let history = useHistory();
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  useEffect(() => {
    console.log(">> results", store.results.allResults);
    if (number < Questions.length) setQuestion(Questions[number]);
    else return history.push("/result");
  }, [number]);

  return (
    <div id="QuestionCont">
      <div id="questionTitle">
        <label>
          {number + 1}. {question.title}
        </label>
        <label>
          {number + 1} of {Questions.length}
        </label>
      </div>
      <div id="variantsCont">
        {question.variants.map((item) => (
          <div
            key={Math.random() * 100000}
            id="variantsItem"
            onClick={() => {
              dispatch(addResult(question.title, item));
              setNumber(number + 1);
            }}
          >
            <label>{item}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCont;
