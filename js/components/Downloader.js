import React, { useState, useEffect } from "react";
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

export default function Downloader(props) {
  let { data } = props;

  function buildInterval(n) {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr;
  }
  function addDays(days, date) {
    let newDate = new Date();
    newDate.setDate(date.getDate() + parseInt(days));
    return  moment(newDate).format('MM/DD/YYYY');
  }

  let intervals = buildInterval(10);
  let schduleArr = [];

  intervals.forEach((i) => {
    let eventData = {
      subject: data.title,
      start_date: addDays(i, data.date),
      start_time: data.startTime,
      end_time: data.endTime,
      desc: data.desc,
      all_day_event: false,
      location: false
    };
    schduleArr.push(eventData);
  });

  return (
    <>
      {JSON.stringify(schduleArr)}
      <CsvDownloader columns={columns} filename="myfile" datas={schduleArr}>
        <button>Download</button>
      </CsvDownloader>
    </>
  );
}
