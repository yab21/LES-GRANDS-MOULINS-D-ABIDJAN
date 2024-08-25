import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";
import DefaultSelectOption from "@/components/DashboardClient/SelectOption/DefaultSelectOption";

const ChartValide: React.FC = () => {
  const series = [
    {
      name: "Validée",
      data: [15, 9, 17, 32, 25, 68, 80, 68, 84, 94, 74, 62],
    },
    {
      name: "En cours de traitement",
      data: [0, 20, 35, 45, 35, 55, 65, 50, 65, 75, 60, 75],
    },
    {
      name: "En cours de livraison",
      data: [35, 13, 57, 22, 75, 38, 60, 28, 34, 44, 64, 32],
    },
    {
      name: "Livrée",
      data: [5, 19, 67, 42, 65, 28, 50, 28, 34, 54, 44, 22],
    },
  ];

  const options: ApexOptions = {
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#FF9C55", "#3FD97F", "#8155FF", "#18BFFF"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      height: 310,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 320,
          },
        },
      },
    ],
    stroke: {
      curve: "smooth",
    },

    markers: {
      size: 0,
    },
    grid: {
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      fixed: {
        enabled: !1,
      },
      x: {
        show: !1,
      },
      y: {
        title: {
          formatter: function (e) {
            return "";
          },
        },
      },
      marker: {
        show: !1,
      },
    },
    xaxis: {
      type: "category",
      categories: [
        "Sep",
        "Oct",
        "Nov",
        "Déc",
        "Jan",
        "Fév",
        "Mar",
        "Avr",
        "Mai",
        "Jui",
        "Juil",
        "Aou",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: "0px",
        },
      },
    },
  };

  return (
    <div className="col-span-12 rounded-[10px] bg-white px-7.5 pb-6 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-6">
      <div className="mb-3.5 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
            Validée
          </h4>
        </div>
        <div className="flex items-center gap-2.5">
          <p className="font-medium uppercase text-dark dark:text-dark-6">
            Capturer:
          </p>
          <DefaultSelectOption options={["PDF", "PNG"]} />
        </div>
      </div>
      <div>
        <div className="-ml-4 -mr-5">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={310}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 text-center xsm:flex-row xsm:gap-0">
        <div className="border-stroke dark:border-dark-3 xsm:w-1/4 xsm:border-r">
          <p className="font-medium">Validée</p>
          <h4 className="mt-1 text-lg font-bold text-dark dark:text-white">
            3.567
          </h4>
        </div>
        <div className="border-stroke dark:border-dark-3 xsm:w-1/4 xsm:border-r">
          <p className="font-medium">En cours de traitement </p>
          <h4 className="mt-1 text-lg font-bold text-dark dark:text-white">
            3.456
          </h4>
        </div>
        <div className="border-stroke dark:border-dark-3 xsm:w-1/4 xsm:border-r">
          <p className="font-medium">En cours de livraison</p>
          <h4 className="mt-1 text-lg font-bold text-dark dark:text-white">
            2.450
          </h4>
        </div>
        <div className="border-stroke dark:border-dark-3 xsm:w-1/4 xsm:border-r">
          <p className="font-medium">Livrée</p>
          <h4 className="mt-1 text-lg font-bold text-dark dark:text-white">
            0.265
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ChartValide;
