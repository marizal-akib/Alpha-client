import { Helmet } from "react-helmet-async";
import { format } from "date-fns";
import parse from "date-fns/parse";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import startOfWeek from "date-fns/startOfWeek";
// import React, { useState } from "react";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import enUS from "date-fns/locale/en-US";
// import DatePicker from "react-datepicker";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ClassCard from "./ClassCard";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Yoga Workshop",
    start_date: "2023-11-10",
    end_date: "2023-11-12",
  },
  {
    title: "Weightlifting Seminar",
    start_date: "2023-11-25",
    end_date: "2023-11-26",
  },
  {
    title: "Fitness Challenge",
    start_date: "2023-11-05",
    end_date: "2023-11-20",
  },
];

const Classes = () => {
  const axiosPublic = useAxiosPublic();
  const { data: section = [] } = useQuery({
    queryKey: ["section"],
    queryFn: async () => {
      const res = await axiosPublic.get("/class");
      return res.data;
    },
  });
  console.log(section);
  return (
    <div>
      <Helmet>
        <title>Alpha | Classes</title>
      </Helmet>

      <div className="pt-14  bg-[#141414]">
      <h2 className=" text-5xl text-center font-bold text-white  mb-4">
            CHOOSE FROM BEST CLASS
          </h2> 
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto mt-8 gap-4">
            {section?.map((classN, i) => (
              <ClassCard key={i} classN={classN}></ClassCard>
            ))}
          </div>
      </div>

     
      <div
        className="p-20"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/tbyG16g/sportswoman-doing-hyperextension-exercise.jpg)",
        }}
      >
        <div className="App">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start_date"
            endAccessor={"end_date"}
            style={{ height: 400, margin: "50px", color: "red" }}
          ></Calendar>
        </div>
      </div>
    </div>
  );
};

export default Classes;
