import {faPlus, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {PageTitle} from "../../../components/ECommercePageComponents";
import ECommerceLayout from "../../../components/layouts/ECommerceLayout";
import OrdersTable from "./OrdersTable";

const Orders = () => {
	return (
		<ECommerceLayout>
			<div className="pt-10 max-w-6xl mx-auto mb-10">
				<div className="flex items-center justify-between">
					<PageTitle title={"Orders"} />
					<div className="flex items-center gap-5">
						<div className="w-80 relative">
							<FontAwesomeIcon icon={faSearch} className="absolute top-[13px] text-gray-400 left-3.5" />
							<input
								type="text"
								className={
									"w-full  pl-10 border border-gray-200 focus:ring-primary focus:ring-2 text-darken focus:border-transparent rounded-full shadow-sm appearance-none placeholder:text-sm placeholder:text-gray-400"
								}
								placeholder="Search Products..."
							/>
						</div>
						<button className="bg-primary hover:bg-indigo-500 duration-300 text-white h-[40px]  px-6 rounded-full flex items-center gap-2 text-sm  ">
							<span>Add</span> <FontAwesomeIcon className="" icon={faPlus} />
						</button>
					</div>
				</div>
			</div>
			<div className="pb-10">
				<OrdersTable />
			</div>
		</ECommerceLayout>
	);
};

export default Orders;
