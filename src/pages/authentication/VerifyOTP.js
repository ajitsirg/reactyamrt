import React, { useContext, useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { Link, useNavigate, useParams } from "react-router-dom";
import AuthLayout from "../../components/layouts/AuthPageLayout";
import logo from "../../asset/images/brand-logo.png";
import { FormSubmitButton } from "../../components/AuthPageComponents";
import VerifiedPopup from "./VerifiedPopup";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../redux/features/authSlice";
import { Navigate } from "react-router-dom";

const VerifyOTP = () => {
  const { num } = useParams();
  console.log(num);
  const baseUrl = "http://13.127.79.250/auth";
  const [otpCode, setOtpCode] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {}, [navigate, otpCode.length]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otpCode.length === 4) {
      const res = await axios.post(`${baseUrl}/verify-otp/`, {
        number: num,
        otp: otpCode,
      });
      console.log(res);

      if (res.data?.status === "OTP is Invalid") {
        toast.error("OTP is Invalid");
      } else {
        toast.success("Successfull Registered!");
        dispatch(setToken(res.data.token.access));
        setShowPopup(true);
        navigate("/");
      }
    } else {
      setShowPopup(false);
    }
  };

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <AuthLayout>
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
        {!showPopup ? (
          <form onSubmit={handleSubmit} className="flex-1 ">
            <div className=" ml-16 max-w-sm flex flex-col items-center w-full">
              <img src={logo} alt="" className="h-20 mb-2" />
              <h2 className="text-4xl mb-5 tracking-wide text-darken font-bold font-sans-pro">
                Verify OTP
              </h2>
              <OtpInput
                value={otpCode}
                onChange={setOtpCode}
                numInputs={4}
                separator={<span style={{ width: "24px" }}></span>}
                isInputNum={true}
                shouldAutoFocus={true}
                inputStyle={{
                  border: "1px solid transparent",
                  borderRadius: "10px",
                  width: "42px",
                  height: "42px",
                  backgroundColor: "#E7E7E7",
                  fontSize: "14px",
                  color: "#000",
                  fontWeight: "400",
                  caretColor: "blue",
                }}
                focusStyle={{
                  border: "1px solid #CFD3DB",
                  outline: "none",
                }}
              />
              <div className="mt-7 text-sm w-2/5">
                <FormSubmitButton text="Submit" />
              </div>
              <p className="mt-10 text-sm text-muted">
                If you are not registered?
                <Link
                  to="/registration"
                  className="pl-1 text-primary font-medium tracking-wide"
                >
                  Register Now
                </Link>
              </p>
            </div>
          </form>
        ) : (
          <div className="flex-1">
            <VerifiedPopup setShowPopup={setShowPopup} />
          </div>
        )}
      </div>
    </AuthLayout>
  );
};

export default VerifyOTP;
