import React from "react";
import { Flexbox } from "@/Grids";
import EmptyStar from "@/Library/Icongraphy/Stars/EmptyStar";
import HalfStar from "@/Library/Icongraphy/Stars/HalfStar";
import Star from "@/Library/Icongraphy/Stars/Star";
import uuid from "@/Utils/uuid";

const Rating = ({ rating }: { rating: number }) => {
	const validRating =
		rating > 5 || typeof rating !== "number" || Number.isNaN(rating) ? 5 : rating < 1 ? 1 : rating;
	const reminder = validRating % 1 !== 0;
	return (
		<>
			<Flexbox gap={0.25} aligncenter={"center"}>
				{[...Array(Math.floor(validRating))].map(_ => {
					return <Star key={uuid()} />;
				})}
				{reminder && <HalfStar key={uuid()} />}
				{[...Array(5 - Math.ceil(validRating))].map(_ => {
					return <EmptyStar key={uuid()} />;
				})}
			</Flexbox>
		</>
	);
};

export default Rating;
