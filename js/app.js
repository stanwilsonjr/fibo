import React, { useState } from "react";

import Downloader from "./components/Downloader";
import Inputcard from "./components/InputCard";
import Datecard from "./components/DateCard";

import { Card } from "./components/SharedElements";

import { AppContext } from "./components/AppContext";

import moment from "moment";

import styled from "styled-components";


export default function App(props) {
  let initialState = {
    title: "",
    date: new Date(),
    startTime: moment(moment(), "HH:mm"),
    endTime: moment(moment().add(1, "hours"), "HH:mm"),
    desc: "",
    sessions: 10,
  };
  let Plansections = [ Inputcard,Datecard,Downloader  ];

  let [state, setState] = useState(initialState);
  let [step,updateSteps] = useState(0);


  let ActiveCard = Plansections[step];


  function progress(direction){
    if( direction === "next" && step < (Plansections.length - 1) ) {
      updateSteps(step + 1)
    }
    if( direction === "prev" && step > 0 ) {
      updateSteps(step - 1)
    }
    
  }
  return (
    <AppContext.Provider value={{ state, setState }}>
      <div>
        <article>
          <h1>FIBO</h1>
          <button  onClick={(e) => progress('next')  }>Next</button>
          <button  onClick={(e) => progress('prev')  }>Previous</button>

          <p>A spaced repetition planner based on the fibonacci sequence</p>
          <ActiveCard/>
          {/* <Inputcard />
          <Datecard/>
          <Downloader  /> */}
        </article>
      </div>
    </AppContext.Provider>
  );
}
//https://github.com/gpbl/react-day-picker
// function fib(n){
//     let arr = [0, 1];
//     for (let i = 2; i < n + 1; i++){
//       arr.push(arr[i - 2] + arr[i -1])
//     }
//    return arr
//   }
//   let testArr = fib(10);
//   console.log(testArr)
///https://stackoverflow.com/questions/3818193/how-to-add-number-of-days-to-todays-date
// https://www.google.com/search?q=react+generate+csv&rlz=1C5CHFA_enUS565US565&oq=react+generate+csv&aqs=chrome..69i57.10713j0j7&{google:bookmarkBarPinned}sourceid=chrome&{google:instantExtendedEnabledParameter}{google:omniboxStartMarginParameter}ie=UTF-8
