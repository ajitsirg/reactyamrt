export const OverviewChartBox = ({data, bodyStyles, titleStyles, numberStyles}) => {
	return (
		<div className={` ${bodyStyles}`}>
			<h2 className={` ${numberStyles}`}>{data.num}</h2>
			<p className={` ${titleStyles}`}>{data.title}</p>
		</div>
	);
};

export const LastWeekDataShowButton = ({setThisWeekData, setLastWeekData, lastWeekData}) => {
	return (
		<button
			onClick={() => {
				setLastWeekData(true);
				setThisWeekData(false);
				console.log(lastWeekData);
			}}
			className={`h-10 inline-flex items-center justify-center px-5 border rounded-lg hover:bg-primary hover:text-white duration-300 ${
				lastWeekData ? "bg-primary text-white" : "bg-transparent text-gray-500"
			}`}
		>
			Last Week
		</button>
	);
};
export const ThisWeekDataShowButton = ({setThisWeekData, setLastWeekData, thisWeekData}) => {
	return (
		<button
			onClick={() => {
				setThisWeekData(true);
				setLastWeekData(false);
				console.log(thisWeekData);
			}}
			className={`h-10 inline-flex items-center justify-center px-5 border rounded-lg hover:bg-primary hover:text-white duration-300 ${
				thisWeekData ? "bg-primary text-white" : "bg-transparent text-gray-500"
			}`}
		>
			This Week
		</button>
	);
};
