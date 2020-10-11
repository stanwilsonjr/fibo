import React, { useState } from "react";
import styled from "styled-components";

import Downloader from "./components/Downloader";
import Inputcard from "./components/InputCard";
import Datecard from "./components/DateCard";
import { AnimatePresence } from "framer-motion";
import { AppContext } from "./components/AppContext";
import moment from "moment";

const Article = styled.article`
  width: 70vw;
  margin: 100px auto;
  display:flex;
  & .deck{
    margin: 0 20px 0 0;
    width: 300px;
  }
  @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 480px)
    and (-webkit-min-device-pixel-ratio: 2) {
      flex-direction: column;
      width: calc(100% - 60px);
  }
`;

export default function App(props) {
  let initialState = {
    title: "",
    date: new Date(),
    startTime: moment(moment(), "HH:mm"),
    endTime: moment(moment().add(1, "hours"), "HH:mm"),
    desc: "",
    sessions: 10,
  };
  let Plansections = [Inputcard, Datecard, Downloader];

  let [state, setState] = useState(initialState);
  let [step, updateSteps] = useState(0);

  let ActiveCard = Plansections[step];

  function progress(direction) {
    if (direction === "next" && step < Plansections.length - 1) {
      updateSteps(step + 1);
    }
    if (direction === "prev" && step > 0) {
      updateSteps(step - 1);
    }
  }
  return (
    <AppContext.Provider value={{ state, setState }}>
      <Article>
        <section className="deck">
          <h1>FIBO</h1>
    
          <p>A spaced repetition planner based on the fibonacci sequence</p>
          <button onClick={(e) => progress("prev")}>Previous</button>
          <button onClick={(e) => progress("next")}>Next</button>
          {/* <span className="material-icons">keyboard_arrow_down</span>
          <span className="material-icons">keyboard_arrow_up</span> */}
        </section>
        <AnimatePresence>
          <ActiveCard />
        </AnimatePresence>
      </Article>
    </AppContext.Provider>
  );
}
