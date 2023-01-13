import {faClose} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

const ButtonInBottom = ({setShowBottomButtons}) => {

	return (
		<div className="fixed bottom-2 inset-x-0 ">
			<div className="bg-slate-900 relative mb-2 rounded-lg  flex items-center justify-center gap-5  py-4 text-white">
				<button className="bg-primary py-2 px-5 rounded-full">Purchase Fuse React</button>
				<button className="bg-gray-500 py-2 px-5 rounded-full">See Documentations</button>
				<FontAwesomeIcon
					onClick={() => setShowBottomButtons(false)}
					icon={faClose}
					className="absolute top-2 right-3 cursor-pointer hover:text-red-500 duration-300"
				/>
			</div>
		</div>
	);
};

export default ButtonInBottom;
