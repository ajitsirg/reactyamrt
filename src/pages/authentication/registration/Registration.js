import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AuthPageTopInfo } from "../../../components/AuthPageComponents";
import AuthPageLayout from "../../../components/layouts/AuthPageLayout";
import RegistrationForm from "./RegistrationForm";
import { Navigate } from "react-router-dom";

const Registration = () => {
  const token = useSelector((state) => state.auth.token);

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <AuthPageLayout>
      <div className="flex items-center justify-center px-16 h-full w-full">
        <div className="flex-1 flex justify-end">
          <div className=" max-w-xl mr-12 text-gray-400 ">
            <h2 className="text-light text-5xl font-sans-pro font-bold">
              Welcome to <br /> our community
            </h2>
            <p className="mt-3 mb-5 ">
              Fuse helps developers to build organized and well coded dashboards
              full of beautiful and rich modules. Join us and start building
              your application today.
            </p>
            <p>More than 17k people joined us, it’s your turn</p>
          </div>
        </div>
        <div className="flex-1 ">
          <div className="max-w-sm ml-16  w-full">
            <AuthPageTopInfo
              title={"Sign up"}
              subtitle={"Already have an account? "}
              linkText="Sign in"
              path="/login"
            />
            <RegistrationForm />
          </div>
        </div>
      </div>
    </AuthPageLayout>
  );
};

export default Registration;
