"use client";
import React, { useState, ReactNode } from "react";
import Link from "next/link";
import Sidebar from "@/components/DashboardClient/SidebarClient";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  User,
} from "@nextui-org/react";
import { ChartBox } from "@/components/DashboardClient/ChartBox";
import Header from "@/components/DashboardClient/HeaderClient";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      {/* <!-- ===== Page Wrapper Star ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Star ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Star ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Star ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Star ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
              <div className="-mb-5 mt-5 flex justify-center">
                <p>
                  All Rights Reserved by
                  <span className="font-medium">
                    LES GRANDS MOULINS D'ABIDJAN
                  </span>
                  . Designed and Developed by{" "}
                  <Link className="text-orange-400" href="javascript:;">
                    African Digit Consulting
                  </Link>
                  .
                </p>
              </div>
              <div className="flex justify-end">
                <Popover showArrow placement="top">
                  <PopoverTrigger>
                    <Button radius="full" color="warning">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#fff"
                          d="M5 18v3.766l1.515-.909L11.277 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2zM4 8h12v8h-5.277L7 18.234V16H4z"
                        />
                        <path
                          fill="#fff"
                          d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2"
                        />
                      </svg>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-1">
                    <ChartBox />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
}
