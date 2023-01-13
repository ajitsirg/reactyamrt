import React from "react";
import DetailsTable from "./DetailsTable";
const Details = () => {
	return (
		<div>
			<div className="mb-2">
				<DetailsTable />
			</div>
			<div className="mb-4">
				<h2 className="text-darken font-semibold font-sans-pro text-lg">Shipping Address</h2>
				<p className=" text-gray-500  font-sans-pro ">377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA</p>
			</div>
			<div className="max-w-xl">
				<h2 className="text-darken font-semibold font-sans-pro text-lg">Order Status</h2>
				<table className="w-full">
					<thead>
						<tr className="text-gray-700 font-medium text-sm tracking-wide border-b">
							<td className="py-2">Status</td>
							<td className="py-2">Updated On</td>
						</tr>
					</thead>
					<tbody className="divide-y">
						<tr>
							<td className="py-2">
								<span className="bg-indigo-500 text-xs text-white px-3 py-1 rounded-full">On pre-order (not paid)</span>
							</td>
							<td className="text-sm py-2 text-gray-500 font-medium">2016/05/17 18:28:37 </td>
						</tr>
						<tr>
							<td className="py-2">
								<span className="bg-blue-500 text-xs text-white px-3 py-1 rounded-full">Awaiting check payment</span>
							</td>
							<td className="text-sm py-2 text-gray-500 font-medium">2016/05/17 18:28:37 </td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Details;
