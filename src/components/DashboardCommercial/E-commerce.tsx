"use client";
import React from "react";
import ChartFarine from "./Charts/ChartFarine";
import ChatCard from "./Chat/ChatCard";
import TableFour from "./Tables/TableFour";
import CalendarBox from "@/components/DashboardCommercial/CalenderBox";

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:mt-6 md:gap-2 2xl:mt-9 2xl:gap-2">
        <div className="rounded-xl border-2 border-slate-200 shadow-lg">
          <TableFour />
        </div>
        <div className="rounded-xl border-2 border-slate-200 shadow-lg">
          <ChartFarine />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-2 md:mt-6 2xl:mt-9 2xl:gap-2">
        <div className="rounded-xl border-2 border-slate-200 shadow-lg">
          <ChatCard />
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl">
        <CalendarBox />
      </div>
    </>
  );
};

export default ECommerce;
