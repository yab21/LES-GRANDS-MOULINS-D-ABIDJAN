import React from "react";
import { dataStats } from "@/types/dataStats";

const dataStatsList = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
      >
        <path
          fill="#fff"
          d="M6.992 14.502a1 1 0 0 0-1 1v1.782a7.97 7.97 0 0 1-2-5.282a7 7 0 0 1 .052-.88a1 1 0 1 0-1.985-.24a9 9 0 0 0-.067 1.12a9.96 9.96 0 0 0 2.417 6.5H2.992a1 1 0 1 0 0 2h4a.98.98 0 0 0 .794-.422l.037-.043c.007-.01.007-.022.013-.032a1 1 0 0 0 .106-.258a1 1 0 0 0 .032-.156c.003-.03.018-.057.018-.089v-4a1 1 0 0 0-1-1m1.5-8.5H6.709a7.97 7.97 0 0 1 5.283-2a7 7 0 0 1 .88.053a1 1 0 0 0 .24-1.987a9 9 0 0 0-1.12-.066a9.96 9.96 0 0 0-6.5 2.417V3.002a1 1 0 0 0-2 0v4a1 1 0 0 0 .039.195a1 1 0 0 0 .141.346l.012.017a1 1 0 0 0 .244.246c.011.008.017.02.028.028c.014.01.03.013.045.021a1 1 0 0 0 .18.084a1 1 0 0 0 .261.053c.018 0 .032.01.05.01h4a1 1 0 0 0 0-2m11.96 10.804a1 1 0 0 0-.141-.345l-.011-.017a1 1 0 0 0-.245-.246c-.011-.008-.016-.02-.028-.028c-.01-.007-.023-.007-.034-.014a1.2 1.2 0 0 0-.41-.136c-.032-.003-.059-.018-.091-.018h-4a1 1 0 0 0 0 2h1.782a7.97 7.97 0 0 1-5.282 2a7 7 0 0 1-.88-.054a1 1 0 0 0-.24 1.987a9 9 0 0 0 1.12.067a9.96 9.96 0 0 0 6.5-2.417v1.417a1 1 0 0 0 2 0v-4a1 1 0 0 0-.04-.195Zm.54-11.304a1 1 0 0 0 0-2h-4a1 1 0 0 0-.192.039l-.007.001a1 1 0 0 0-.34.14l-.02.013a1 1 0 0 0-.245.244c-.008.01-.02.016-.028.027c-.007.01-.007.023-.014.034a1.2 1.2 0 0 0-.136.413c-.003.03-.018.057-.018.089v4a1 1 0 1 0 2 0V6.719a7.98 7.98 0 0 1 2 5.283a7 7 0 0 1-.053.88a1 1 0 0 0 .872 1.113a1 1 0 0 0 .122.007a1 1 0 0 0 .991-.88a9 9 0 0 0 .068-1.12a9.96 9.96 0 0 0-2.417-6.5Z"
        />
      </svg>
    ),
    color: "#3FD97F",
    title: "En cours de traitement",
    value: "3.456",
    growthRate: 0.43,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 512 512"
      >
        <path
          fill="#fff"
          d="M256 16C123.5 16 16 123.5 16 256c0 132.6 107.5 240 240 240c132.6 0 240-107.4 240-240S388.6 16 256 16m0 60c99.4 0 180 80.6 180 180s-80.6 180-180 180S76 355.4 76 256S156.6 76 256 76m91.3 64.2c-6.5 0-12.5 2.4-16.8 8.2c-52 70.1-69 96.5-106 169.8c-8.4-11.1-65.6-72.4-93.9-94.1c-14.2-10.9-41.3 27.2-31.6 37.1C142.6 306.1 220.1 406 232.7 405c21.4-1.7 75.1-136.8 148.8-233.7c8-10.4-15-31.3-34.2-31.1"
        />
      </svg>
    ),
    color: "#FF9C55",
    title: "Validée",
    value: "3.567",
    growthRate: 4.35,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
      >
        <path
          fill="#fff"
          d="M13.5 18H4v-6h10.3c1-1.2 2.5-2 4.2-2c1.3 0 2.5.5 3.5 1.3V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10.6c-.4-.6-.8-1.3-1.1-2M4 6h16v2H4zm14.5 6c-1.9 0-3.5 1.6-3.5 3.5c0 2.6 3.5 6.5 3.5 6.5s3.5-3.9 3.5-6.5c0-1.9-1.6-3.5-3.5-3.5m0 4.8c-.7 0-1.2-.6-1.2-1.2c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2c.1.6-.5 1.2-1.2 1.2"
        />
      </svg>
    ),
    color: "#8155FF",
    title: "En cours de livraison",
    value: "2.450",
    growthRate: 2.59,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          color="#fff"
        >
          <path d="M21 7v5M3 7v10.161c0 1.383 1.946 2.205 5.837 3.848C10.4 21.67 11.182 22 12 22V11.355M15 19s.875 0 1.75 2c0 0 2.78-5 5.25-6" />
          <path d="M8.326 9.691L5.405 8.278C3.802 7.502 3 7.114 3 6.5s.802-1.002 2.405-1.778l2.92-1.413C10.13 2.436 11.03 2 12 2s1.871.436 3.674 1.309l2.921 1.413C20.198 5.498 21 5.886 21 6.5s-.802 1.002-2.405 1.778l-2.92 1.413C13.87 10.564 12.97 11 12 11s-1.871-.436-3.674-1.309M6 12l2 1m9-9L7 9" />
        </g>
      </svg>
    ),
    color: "#18BFFF",
    title: "Livrée",
    value: "0.265",
    growthRate: -0.95,
  },
];

const DataStatsOne: React.FC<dataStats> = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {dataStatsList.map((item, index) => (
          <div
            key={index}
            className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark"
          >
            <div
              className="flex h-14.5 w-14.5 items-center justify-center rounded-full"
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </div>

            <div className="mt-6 flex items-end justify-between">
              <div>
                <h4 className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">
                  {item.value}
                </h4>
                <span className="text-body-sm font-medium">{item.title}</span>
              </div>

              <span
                className={`flex items-center gap-1.5 text-body-sm font-medium ${
                  item.growthRate > 0 ? "text-green" : "text-red"
                }`}
              >
                {item.growthRate}%
                {item.growthRate > 0 ? (
                  <svg
                    className="fill-current"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.35716 2.3925L0.908974 5.745L5.0443e-07 4.86125L5 -5.1656e-07L10 4.86125L9.09103 5.745L5.64284 2.3925L5.64284 10L4.35716 10L4.35716 2.3925Z"
                      fill=""
                    />
                  </svg>
                ) : (
                  <svg
                    className="fill-current"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.64284 7.6075L9.09102 4.255L10 5.13875L5 10L-8.98488e-07 5.13875L0.908973 4.255L4.35716 7.6075L4.35716 7.6183e-07L5.64284 9.86625e-07L5.64284 7.6075Z"
                      fill=""
                    />
                  </svg>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DataStatsOne;
