import React, { useState } from "react";
import styled from "styled-components";

import Downloader from "./components/Downloader";
import Inputcard from "./components/InputCard";
import Datecard from "./components/DateCard";
import { AnimatePresence } from "framer-motion";
import { AppContext } from "./components/AppContext";
import moment from "moment";


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
    <AppContext.Provider value={{ state, setState, step, updateSteps }}>
        <AnimatePresence>
          <ActiveCard />
        </AnimatePresence>
        {/* <button onClick={(e) => progress("prev")}>Previous</button>
        <button onClick={(e) => progress("next")}>Next</button> */}
    </AppContext.Provider>
  );
}
