import React, { useContext } from "react";
import { Card } from "./SharedElements";
import { AppContext } from "./AppContext";
import styled from "styled-components";
import moment from "moment";
import CsvDownloader from "react-csv-downloader";




const Downloadbutton = styled.div`
  background: #222;
  color: #fff;
  padding: 5px 7px;
  border-radius: 7px;
  align-self: self-start;

`




const columns = [
  {
    id: "subject",
    displayName: "Subject",
  },
  {
    id: "start_date",
    displayName: "Start Date",
  },
  {
    id: "all_day_event",
    displayName: "All Day Event",
  },
  {
    id: "start_time",
    displayName: "Start Time",
  },
  {
    id: "end_time",
    displayName: "End Time",
  },
  {
    id: "desc",
    displayName: "Description",
  },
];

export default function Downloader() {
  const context = useContext(AppContext);
  const { state  } = context;
  function buildInterval(n) {

    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr;
  }
  function addDays(days, date) {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + parseInt(days));
    return moment(newDate).format("MM/DD/YYYY");
  }
  function slugify(str){
    return str.trim().replace(/\s/g,"-").toLowerCase();
  }
  let intervals = buildInterval(10);
  let schduleArr = [];
  
  intervals.forEach((i) => {
    let eventData = {
      subject: state.title,
      start_date: addDays(i, state.date),
      start_time: moment(state.startTime, "HH:mm").format("hh:mm A"),
      end_time:  moment(state.endTime, "HH:mm").format("hh:mm A"),
      desc: state.desc,
      all_day_event: "False"
    };
    schduleArr.push(eventData);
  });
  
  
  let eventName =  slugify(state.title);
  return (
    <Card>
      {/* {JSON.stringify(schduleArr)} */}

      <h2>Download your plan</h2>
      <p> After you download your plan you can <a href="https://support.google.com/calendar/answer/37118?co=GENIE.Platform%3DDesktop&hl=en" target="_blank">upload it to an new or existing Google Calendar</a></p>
      <CsvDownloader columns={columns} filename={eventName} datas={schduleArr}>
        <Downloadbutton>Download</Downloadbutton>
      </CsvDownloader>
    </Card>
  );
}
