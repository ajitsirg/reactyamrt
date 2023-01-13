import React, {useState} from "react";
import {navItems} from "./DashboardContent";
import Budget from "./tabs/Budget";
import Overview from "./tabs/overview/Overview";
import Team from "./tabs/Team";

const HomeTabs = () => {
	const [active, setActive] = useState(0);
	const [clicked, setClicked] = useState(0);
	const handleActive = (index) => {
		setActive(index);
		setClicked(index);
	};
	return (
		<div className=" px-4 pt-3 min-h-[300px] w-full bg-gray-100 border rounded-lg border-gray-200">
			<nav className="flex items-center gap-10 border-b border-gray-200 ">
				{navItems.map((navItem, index) => (
					<button
						key={navItem.id}
						onClick={() => handleActive(index)}
						className={` text-base font-sans-pro inline-flex items-center gap-3  pb-3 px-2 border-b-2 ${
							index === clicked ? "border-primary text-primary font-semibold " : "border-transparent text-gray-500"
						}`}
					>
						{navItem.name}
						{navItem.badge && <span className="h-5 w-5 font-bold text-sm inline-flex items-center justify-center rounded-full bg-primary text-primary bg-opacity-20">{navItem.badge}</span>}
					</button>
				))}
			</nav>
			<div className="mt-8 mb-5">
				{active === 0 && <Overview />}
				{active === 1 && <Budget />}
				{active === 2 && <Team />}
			</div>
		</div>
	);
};

export default HomeTabs;
