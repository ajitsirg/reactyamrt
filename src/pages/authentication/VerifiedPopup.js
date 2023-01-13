import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import logo from "../../asset/images/brand-logo.png";
const VerifiedPopup = ({count, setCount, setShowPopup}) => {
	useEffect(() => {
		const interval = setInterval(() => {
			setCount(count - 1);
			if (count === 0) {
				setCount( 0);
				return () => clearInterval(interval);
      }
		}, 1000);
	}, [count, setCount, setShowPopup]);
	return (
		<div className=" ml-16 max-w-sm flex flex-col items-center w-full">
			<img src={logo} alt="" className="h-20 mb-2" />
			<h2 className="text-4xl tracking-wide text-darken font-bold font-sans-pro">OTP Verified</h2>
			<p className="text-sm text-gray-600 mt-1 ">Redirecting in {count} seconds</p>
			<p className="text-sm text-muted mt-5 flex items-center gap-1">
				Go to
				<Link to="/login" className="text-primary font-medium">
					Dashboard
				</Link>
			</p>
		</div>
	);
};

export default VerifiedPopup;
