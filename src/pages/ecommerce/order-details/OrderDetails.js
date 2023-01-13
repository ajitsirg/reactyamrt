import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {Link} from "react-router-dom";
import ECommerceLayout from "../../../components/layouts/ECommerceLayout";
import OrderDetailsTabs from "./OrderDetailsTabs";
const OrderDetails = () => {
	return (
		<ECommerceLayout>
			<div className="pt-4 max-w-6xl mx-auto mb-10">
				<Link to="/orders" className="flex items-center gap-2 text-gray-600 cursor-pointer">
					<FontAwesomeIcon icon={faArrowLeft} />
					<h4 className="font-sans-pro text-lg font-semibold">Orders</h4>
				</Link>
				<div className="mt-3">
					<h4 className="text-3xl font-bold font-sans-pro text-muted">Orders 35a4dbc6</h4>
					<p className="text-sm max-w-lg text-gray-500">Dollie Bullock</p>
				</div>
				<div className="mt-8 pb-10">
					<OrderDetailsTabs />
				</div>
			</div>
		</ECommerceLayout>
	);
};

export default OrderDetails;
