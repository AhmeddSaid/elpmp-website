"use client";
import React, { useState } from "react";
import {
	Answer,
	Question,
	QuestionBox,
	QuestionContainer,
} from "@/Components/FAQ/QuestionTray.styles";
import { AutoCol, Col } from "@/Grids";
import Chevron from "@/Library/Icongraphy/Chevron/24/Chevron";

const QuestionTray = ({
	isOpen = false,
	question,
	answer,
}: {
	isOpen?: boolean;
	question: string;
	answer: string;
}) => {
	const [open, setOpen] = useState(isOpen);
	return (
		<>
			<QuestionBox>
				<QuestionContainer
					onClick={() => setOpen(prevState => !prevState)}
					justify={"space-between"}
				>
					<Col xs={10}>
						<Question>{question}</Question>
					</Col>
					<AutoCol>
						<Chevron className={`rotate ${open ? "active" : undefined}`} />
					</AutoCol>
				</QuestionContainer>
				<Answer isOpen={open}>{answer}</Answer>
			</QuestionBox>
		</>
	);
};

export default QuestionTray;
