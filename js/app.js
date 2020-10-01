import React, { useState, useEffect } from "react";
import DayPicker from "react-day-picker";
import TimePicker from "rc-time-picker";
import Downloader from "./components/Downloader";
import moment from "moment";

import styled from "styled-components";
import "react-day-picker/lib/style.css";
import "rc-time-picker/assets/index.css";

const Card = styled.section`
  border: 1px solid #333;
  margin: 20px 0;
  padding: 15px 25px;
  border-radius: 10px;
  font-family: Inter, sans-serif;
  display: flex;
  flex-direction: column;
  & .inputcontainer {
    max-width: 300px;
  }
`;
const Input = styled.div`
  width: 300px;
  & input {
    width: 100%;
    min-height: 30px;
    margin: 0 0 5px 0;
    padding: 0;
  }

  & textarea {
    width: 100%;
    min-height: 200px;
    margin: 0;
  }
`;
 
export default function App(props) {
  let initialState = {
    title: "",
    date: new Date() ,
    startTime: moment(moment(), "HH:mm"),
    endTime: moment(moment().add(1, 'hours'), "HH:mm"),
    desc: "",
    sessions: 10 
  };
  let [state, setState] = useState(initialState);
   
  function handleDayClick(day, { selected }) {
    console.log(day);
    setState({ ...state, date: day });
  }
  function updateTime(time) {

    let newEnd = moment(time.add(1, 'hours'), "HH:mm")
    setState({ ...state, startTime: time, endTime:newEnd  });
  }
  let ActiveCard = Card;
  return (
    <div>
      <article>
        <h1>FIBO</h1>
        <p>A spaced repetition planner based on the fibonacci sequence</p>
        <Card>
          <h2>What do you want to learn?</h2>
          <Input>
            <input
              placeholder="Add title"
              type="text"
              value={state.title}
              onChange={(e) => {
                setState({ ...state, title: e.currentTarget.value });
              }}
            />
            <textarea
              value={state.desc}
              placeholder="Add Description"
              onChange={(e) => {
                setState({ ...state, desc: e.currentTarget.value });
              }}
            />
          </Input>
        </Card>

        <Card>
          <h2>When do you want to start?</h2>

          <TimePicker
            showSecond={false}
            onChange={updateTime}
            use12Hours
            className="inputcontainer"
            defaultValue={state.startTime}
          />
          <DayPicker onDayClick={handleDayClick} className="inputcontainer" />
        </Card>
        {/* <Card>
          <h2>How many sessions?</h2>
          
        </Card> */}
        <Card>
          <h2>Download your schedule</h2>
          <Downloader  data={state}/>

        </Card>
      </article>
    </div>
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
