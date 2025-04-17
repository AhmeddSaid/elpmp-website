import React, { ReactNode } from "react";
import { Title4 } from "@/Library/Typography/TypographyNew";
import { HighLightsIconShell } from "@/Library/_Pages/Courses/CourseDetails/CourseHighLights/CourseHighlights.styles";

const HighLightsIconSection = ({ icon, content }: { icon: ReactNode; content: string }) => {
	return (
		<>
			<HighLightsIconShell aligncenter={"center"}>
				{icon}
				<Title4 weight={"Regular"}>{content}</Title4>
			</HighLightsIconShell>
		</>
	);
};

export default HighLightsIconSection;
