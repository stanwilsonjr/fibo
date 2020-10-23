import React, { useContext } from "react";
import { Card } from "./SharedElements";
import { AppContext } from "./AppContext";
import styled from "styled-components";
import moment from "moment";
import CsvDownloader from "react-csv-downloader";




const Downloadbutton = styled.button`
  border: none;
  background-color: orange;
  font-family: inherit;
  font-size: 15px;
  padding: 7px;
  cursor: pointer;
  color: #fff;
  margin: 15px 0 0 0;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  & span{
    margin-right: 3px;
  }
`

const EventItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #efefef;
   
  padding: 3px 0 ;
  & .event-title{
    font-weight: 600;
  }
  & .event-timing{

  }
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
  schduleArr.splice(1,1);
  
  
  let eventName =  slugify(state.title);
  return (
    <Card>
      <h2>Review your {state.title} learning plan</h2>
      <section>
        {schduleArr.map(  (ev, i) => (
          <EventItem key={`event-${i}`} > 
            <span className="event-title">Session {i + 1}</span> 
            <span className="event-timing">{ev.start_date} {ev.start_time}-{ev.end_time}</span>
          </EventItem>
        ))}
      </section>

      <p>   <a href="https://support.google.com/calendar/answer/37118?co=GENIE.Platform%3DDesktop&hl=en" target="_blank"> How to upload your plan to a new or existing Google Calendar</a></p>
      <CsvDownloader columns={columns} filename={eventName} datas={schduleArr}>
        <Downloadbutton>
          <span class="material-icons">arrow_circle_down</span>
          Download your plan
          </Downloadbutton>
      </CsvDownloader>
    </Card>
  );
}
