import React, { useContext } from "react";
import styled from "styled-components";

import DayPicker from "react-day-picker";
import TimePicker from "rc-time-picker";
import Nextbutton  from "./NextButton";
import moment from "moment";

import { AppContext } from "./AppContext";
import { Card } from "./SharedElements";

import "react-day-picker/lib/style.css";
import "rc-time-picker/assets/index.css";


const Datecontainer = styled.div`
  width: 100%;
  max-width: 270px;

`
const modifiersStyles = {
  thursdays: {
    color: '#ffc107',
    backgroundColor: '#fffdee',
  }
};


export default function Datecard() {
  const context = useContext(AppContext); 

  function handleDayClick(day, { selected }) {
    console.log(day);
    context.setState({ ...context.state, date: day });
  }
  function updateTime(time) {
    let endTime = moment(time);
    let newEnd = moment(endTime.add(1, "hours"), "HH:mm");
    context.setState({ ...context.state, startTime: time, endTime: newEnd });
  }
    return(

        <Card>
            <h2>When do you want to start?</h2>
            <Datecontainer>
              <TimePicker
                showSecond={false}
                onChange={updateTime}
                use12Hours
                className="inputcontainer"
                defaultValue={context.state.startTime}
              />
              <DayPicker modifiersStyles={modifiersStyles}  onDayClick={handleDayClick} className="inputcontainer" />
              <Nextbutton   disabled={false} text="Review Plan"  />
            </Datecontainer>
          </Card>
    )

}