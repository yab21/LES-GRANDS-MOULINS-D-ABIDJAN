"use client";
import React, { useState, ReactNode } from "react";
import Link from "next/link";
import Sidebar from "@/components/DashboardChefDeVente/SidebarChefDeVente";
import Header from "@/components/DashboardChefDeVente/HeaderChefDeVente";

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
