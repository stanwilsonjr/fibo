import React, { useContext } from "react";
import { Card } from "./SharedElements";

import { AppContext } from "./AppContext";

import moment from "moment";

import CsvDownloader from "react-csv-downloader";

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
    id: "location",
    displayName: "Location",
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

  let intervals = buildInterval(10);
  let schduleArr = [];

  intervals.forEach((i) => {
    let eventData = {
      subject: state.title,
      start_date: addDays(i, state.date),
      start_time: state.startTime,
      end_time: state.endTime,
      desc: state.desc,
      all_day_event: false,
      location: false,
    };
    schduleArr.push(eventData);
  });

  console.log(schduleArr.length);

  return (
    <Card>
      {/* {JSON.stringify(schduleArr)} */}

      <h2>Download your schedule</h2>
      <CsvDownloader columns={columns} filename="myfile" datas={schduleArr}>
        <button>Download</button>
      </CsvDownloader>
    </Card>
  );
}
