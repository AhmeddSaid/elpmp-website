import React from "react";
import styles from "./../../../Grids/Spaces.module.css";
import { Display2, Heading2 } from "@/Library/Typography/TypographyNew";
import { SelectYourExamCardShell } from "@/Library/_Pages/TestYourKnowledge/SelectYourExam/SelectYourExam.styles";
import Button from "@/UI/Button/Button";

const SelectYourExamCard = ({ exam, examFullName }: { exam: string; examFullName: string }) => {
	return (
		<>
			<SelectYourExamCardShell>
				<Display2>{exam}</Display2>
				<Heading2 align className={`${styles.paddingInline24}`}>
					{examFullName}
				</Heading2>

				<div className={styles.paddingInline24}>
					<Button fullwidth variant={"secondary"} body={"Select Your Exam"} />
				</div>
			</SelectYourExamCardShell>
		</>
	);
};

export default SelectYourExamCard;
