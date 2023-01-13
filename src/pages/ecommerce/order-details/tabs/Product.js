import React from "react";
import {product} from "./ordersTabContent";
import album from "../../../../asset/images/album.jpeg";
const Product = () => {
	return (
		<div className="rounded-lg overflow-hidden">
			<table className="w-full overflow-auto">
				<thead>
					<tr className="text-muted tracking-wide font-sans-pro text-lg border-b box-border">
						{product.head.map((each) => (
							<th className="whitespace-nowrap px-3 py-3 text-left" key={each.id}>
								{each.title}
							</th>
						))}
					</tr>
				</thead>
				<tbody className="divide-y">
					{product.row.map((each) => (
						<tr key={each.id} className="">
							<td className="whitespace-nowrap px-3 py-4">{each.id}</td>
							<td className="whitespace-nowrap px-3 py-4">
								<img src={album} className="h-20 object-cover border-2 rounded-md border-gray-300 w-16" alt="" />
							</td>
							<td className="whitespace-nowrap px-3 py-4">{each.name}</td>
							<td className="whitespace-nowrap px-3 py-4">₹ {each.price}</td>
							<td className="whitespace-nowrap px-3 py-4">{each.quantity} </td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Product;
