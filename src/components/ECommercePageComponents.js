import {faAngleDown, faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const PageTitle = ({title}) => {
	return <h2 className="font-sans-pro font-bold text-4xl text-darken ">{title}</h2>;
};

export const menDummyImg = "https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?w=2000";

export const albumImg = "../asset/images/album.jpeg";

export const Pagination = ({pageNo}) => {
	return (
		<div className="w-full py-3 flex items-center justify-end gap-8 pr-4 text-sm text-gray-500 border-t">
			<div className="flex items-center gap-2">
				<span>Row per page: </span>
				<label htmlFor="options" className="relative w-10 block cursor-pointer" id="options">
					<select className="border-none bg-none p-0 text-sm appearance-none focus:ring-0 w-full cursor-pointer">
						<option value="10">10</option>
						<option value="20">20</option>
						<option value="30">20</option>
					</select>
					<FontAwesomeIcon icon={faAngleDown} className="absolute top-1 text-xs right-2.5" />
				</label>
			</div>
			<div className="flex items-center gap-4">
				<span>1-10 of 20</span>
				<div className="flex items-center gap-2">
					<FontAwesomeIcon className="cursor-pointer hover:text-darken duration-300" icon={faAngleLeft} />
					<FontAwesomeIcon className="cursor-pointer hover:text-darken duration-300" icon={faAngleRight} />
				</div>
			</div>
		</div>
	);
};
