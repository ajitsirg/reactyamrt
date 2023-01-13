import React, {useState} from "react";
import Details from "./tabs/details/Details";
import Product from "./tabs/Product";
import Invoice from "./tabs/Invoice";
const OrderDetailsTabs = () => {
	const [active, setActive] = useState(0);
	const [clicked, setClicked] = useState(0);
	const blocks = [
		{id: 0, name: "Order Details", icons: ""},
		{id: 1, name: "Product", icons: ""},
		{id: 2, name: "Invoice", icons: ""},
	];
	const handleActive = (index) => {
		setActive(index);
		setClicked(index);
	};
	return (
		<div className=" px-4 py-3 min-h-[300px] w-full bg-white border rounded-lg border-gray-200">
			<nav className="flex items-center gap-10 border-b border-gray-200 ">
				{blocks.map((block, index) => (
					<button
						key={block.id}
						onClick={() => handleActive(index)}
						className={` text-base font-sans-pro  pb-3 px-2 border-b-2 ${index === clicked ? "border-primary text-primary font-semibold " : "border-transparent text-gray-500"}`}
					>
						{block.name}
					</button>
				))}
			</nav>
			<div className="mt-5 mb-5">
				{active === 0 && <Details />}
				{active === 1 && <Product />}
				{active === 2 && <Invoice />}
			</div>
		</div>
	);
};

export default OrderDetailsTabs;
