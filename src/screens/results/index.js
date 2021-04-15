import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./styles.css";
import { deleteResult } from "./../../redux/results/actions";

const ResultScreen = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  return (
    <div className="App-head">
      <label id="Title">Results</label>
      <div id="resultsCont">
        <label id="resultsTitle">You answered:</label>
        {store.results.allResults.map((item) => (
          <div key={Math.random() * 100000} id="resultsItem">
            <label>
              {item.title} - <label id="answer">{item.answer}</label>
            </label>
          </div>
        ))}
        <Link id="again" onClick={() => dispatch(deleteResult())} to="/">
          Reply again
        </Link>
      </div>
    </div>
  );
};

export default ResultScreen;
