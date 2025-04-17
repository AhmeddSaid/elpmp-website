import React from "react";

const CheckmarkGrey24 = ({ className, id }: { className?: string; id?: string }) => {
	return (
		<>
			<svg
				className={className}
				id={id}
				width="24"
				height="25"
				viewBox="0 0 24 25"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect y="0.71582" width="24" height="24" rx="12" fill="#42434A" />
				<path
					d="M16.1705 10.0453C16.6098 10.4847 16.6098 11.197 16.1705 11.6363L11.6705 16.1363C11.2312 16.5757 10.5188 16.5757 10.0795 16.1363L7.8295 13.8863C7.39017 13.447 7.39017 12.7347 7.8295 12.2953C8.26884 11.856 8.98116 11.856 9.42049 12.2953L10.875 13.7498L14.5795 10.0453C15.0188 9.60599 15.7312 9.60599 16.1705 10.0453Z"
					fill="white"
				/>
			</svg>
		</>
	);
};

export default CheckmarkGrey24;
