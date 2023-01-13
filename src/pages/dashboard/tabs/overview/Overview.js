import React, {useState} from "react";
import OverviewCards from "../overview/OverviewCards";
import {overviewCards, overviewChartBox} from "../../DashboardContent";
import {LastWeekDataShowButton, OverviewChartBox, ThisWeekDataShowButton} from "./OverviewComp";
import MainChart from "./MainChart";

const Overview = () => {
	const [thisWeekData, setThisWeekData] = useState(true);
	const [lastWeekData, setLastWeekData] = useState(false);
	return (
		<div>
			<div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
				<OverviewCards each={overviewCards[0]} infoColor="text-indigo-600" />
				<OverviewCards each={overviewCards[1]} infoColor="text-orange-600" />
				<OverviewCards each={overviewCards[2]} infoColor="text-rose-700" />
				<OverviewCards each={overviewCards[3]} infoColor="text-green-600" />
			</div>
			<div className="bg-white rounded-xl mt-8 pt-4 pb-4 pr-4 pl-2 grid grid-cols-1 xl:grid-cols-2 gap-4">
				<div className="xl:col-span-2 flex items-start -mt-1 justify-between gap-4">
					<h3 className="pl-2 text-gray-400 capitalize font-medium tracking-wide text-lg">Github issues summary</h3>
					<div className="flex items-center gap-4">
						<LastWeekDataShowButton setLastWeekData={setLastWeekData} setThisWeekData={setThisWeekData} lastWeekData={lastWeekData} />
						<ThisWeekDataShowButton setLastWeekData={setLastWeekData} setThisWeekData={setThisWeekData} thisWeekData={thisWeekData} />
					</div>
				</div>
				<MainChart />
				<div className="w-full pl-2 xl:pl-0">
					<div className="grid grid-cols-2 gap-4">
						<OverviewChartBox
							data={overviewChartBox.top[0]}
							bodyStyles="bg-indigo-100 text-indigo-600 h-32 flex flex-col  items-center justify-center rounded-lg"
							numberStyles="font-bold text-4xl"
							titleStyles="capitalize"
						/>
						<OverviewChartBox
							data={overviewChartBox.top[1]}
							bodyStyles="bg-green-100 text-green-600 h-32 flex flex-col  items-center justify-center rounded-lg"
							numberStyles="font-bold text-4xl"
							titleStyles="capitalize"
						/>
					</div>
					<div className="grid grid-cols-4 gap-4 mt-4">
						{overviewChartBox.bottom.map((each) => (
							<OverviewChartBox
								key={each.id}
								data={each}
								bodyStyles="bg-indigo-50 text-gray-500 h-32 flex flex-col  items-center justify-center rounded-lg"
								numberStyles="font-bold text-4xl"
								titleStyles="capitalize text-sm"
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Overview;
