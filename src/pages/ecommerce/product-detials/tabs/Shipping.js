import React from "react";
import {FormInputComp} from "../../../../components/AuthPageComponents";

const Shipping = () => {
	return (
		<div className="max-w-xl">
			<div className="w-full flex items-center justify-between mb-4 gap-4">
				<FormInputComp placeholder="Width" type="text" name="width" />
				<FormInputComp placeholder="Height" type="text" name="height" />
				<FormInputComp placeholder="Depth" type="text" name="depth" />
			</div>
			<div className="w-full flex flex-col gap-4">
				<FormInputComp placeholder="Weight" type="text" name="weight" />
				<FormInputComp placeholder="Extra Shipping Fee" type="text" name="fee" />
			</div>
		</div>
	);
};

export default Shipping;
