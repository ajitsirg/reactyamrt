import React from "react";

const OverviewCards = ({each, infoColor}) => {
	return (
		<div className="h-40 bg-white w-full flex flex-col items-start justify-between px-4 rounded-lg border shadow py-2">
			<h5 className={`text-muted rounded-full capitalize font-medium inline-block`}>{each.name}</h5>
			<h3 className={`text-2xl xl:text-3xl font-bold capitalize flex flex-col items-center w-full font-sans-pro ${infoColor}`}>
				<span>{each.num}</span>
				<span>{each.title}</span>
			</h3>
			<p className="text-center text-gray-500 w-full  font-sans-pro">
				{each.subTitle} : {each.taskNum}
			</p>
		</div>
	);
};

export default OverviewCards;
