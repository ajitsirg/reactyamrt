import React from "react";
import AuthPageLayout from "../../components/layouts/AuthPageLayout";
import logo from "../../asset/images/brand-logo.png";
import {Link} from "react-router-dom";
const Logout = () => {
	return (
		<AuthPageLayout>
			<div className="flex items-center justify-center px-16 h-full w-full">
				<div className="flex-1 flex justify-end">
					<div className=" max-w-xl mr-12 text-gray-400 ">
						<h2 className="text-light text-5xl font-sans-pro font-bold">
							Welcome to <br /> our community
						</h2>
						<p className="mt-3 mb-5 ">Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today.</p>
						<p>More than 17k people joined us, it’s your turn</p>
					</div>
				</div>
				<div className="flex-1 ">
					<div className=" ml-16 max-w-sm flex flex-col items-center w-full">
						<img src={logo} alt="" className="h-20 mb-2" />
						<h2 className="text-4xl tracking-wide text-darken font-bold font-sans-pro">You have signed out!</h2>
						<p className="text-sm text-gray-600 mt-1 ">Redirecting in 5 seconds</p>
						<p className="text-sm text-muted mt-5 flex items-center gap-1">
							Go to
							<Link to="/login" className="text-primary font-medium">
								Sign In
							</Link>
						</p>
					</div>
				</div>
			</div>
		</AuthPageLayout>
	);
};

export default Logout;
