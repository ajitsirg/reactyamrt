import React from "react";
import { Link } from "react-router-dom";

const PrivacyAndPolicy = () => {
	return (
		<div className="bg-slate-900 text-white text-center h-screen flex items-center justify-center font-roboto">
			<div>
				<h2 className="text-5xl font-sans-pro font-bold">Privacy & Policy</h2>
				<p className="text-gray-400 mt-2 mb-5">Page under constructions 👨‍💻</p>
				<Link to='/login' className="duration-300 hover:bg-indigo-500 py-2 rounded-full bg-primary px-4 text-sm tracking-wide">Back to Login</Link>
			</div>
		</div>
	);
};

export default PrivacyAndPolicy;
