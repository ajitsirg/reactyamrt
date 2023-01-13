import React from "react";
import {orderDetails} from "../ordersTabContent";

const DetailsTable = () => {
	return (
		<table className="w-full overflow-auto">
			<thead>
				<tr className="border-b">
					{orderDetails.head.map((each) => (
						<td className="whitespace-normal text-darken font-semibold font-sans-pro text-lg py-2" key={each.id}>
							{each.title}
						</td>
					))}
				</tr>
			</thead>
			<tbody>
				<tr>
					{orderDetails.row.map((each) => (
						<td key={each.id} className="py-2 text-base font-sans-pro text-gray-500">
							{each.title}
						</td>
					))}
				</tr>
			</tbody>
		</table>
	);
};

export default DetailsTable;
