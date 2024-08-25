"use client";
import React from "react";
import ChartThree from "./Charts/ChartThree";
import ChartFarine from "./Charts/ChartFarine";
import ChatCard from "./Chat/ChatCard";
import TableFour from "./Tables/TableFour";
import TableSix from "./Tables/TableSix";
import DataStatsOne from "@/components/DashboardChefDeVente/DataStats/DataStatsOne";
import ChartOne from "@/components/DashboardChefDeVente/Charts/ChartOne";
import CalendarBox from "@/components/DashboardChefDeVente/CalenderBox";

const ECommerce: React.FC = () => {
  return (
    <>
      {/* <DataStatsOne /> */}

      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:mt-6 md:gap-2 2xl:mt-9 2xl:gap-2">
        <div className="rounded-xl border-2 border-slate-200 shadow-lg">
          <TableFour />
        </div>
        <div className="rounded-xl border-2 border-slate-200 shadow-lg">
          <ChartFarine />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:mt-6 md:gap-2 2xl:mt-9 2xl:gap-2">
        <div className="rounded-xl border-2 border-slate-200 shadow-lg">
          <TableSix />
        </div>
        <div className="rounded-xl border-2 border-slate-200 shadow-lg">
          <ChatCard />
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl">
        <CalendarBox />
      </div>
      {/* <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <ChartOne />
        <ChartThree />
      </div> */}
    </>
  );
};

export default ECommerce;
