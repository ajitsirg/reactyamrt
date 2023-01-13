import { faBell, faEnvelope, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { menDummyImg } from "../../components/ECommercePageComponents";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import HomeTabs from "./HomeTabs";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const token = useSelector((state) => state.auth.token);

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <DashboardLayout>
      <div className="pt-6 max-w-6xl mx-auto mb-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={menDummyImg}
              className="h-20 w-20 object-cover rounded-full border flex-shrink-0 "
              alt=""
            />
            <div>
              <h4 className="text-3xl font-bold font-sans-pro text-muted">
                Welcome back, Brain!
              </h4>
              <p className="text-sm max-w-lg mt-0.5 text-gray-500">
                <FontAwesomeIcon icon={faBell} /> You have 2 new message and 15
                new tasks
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-muted flex-row-reverse hover:bg-gray-800 duration-300 text-white h-[40px]  px-6 rounded-full flex items-center gap-2 text-sm  ">
              <span>Message</span>{" "}
              <FontAwesomeIcon className="" icon={faEnvelope} />
            </button>
            <button className="bg-primary flex-row-reverse hover:bg-indigo-500 duration-300 text-white h-[40px]  px-6 rounded-full flex items-center gap-2 text-sm  ">
              <span>Settings</span>{" "}
              <FontAwesomeIcon className="" icon={faGear} />
            </button>
          </div>
        </div>
        <div className="mt-10">
          <HomeTabs />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
