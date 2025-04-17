import React from "react";
import { HeaderCaption } from "@/Components/SectionHeader/SectionHeader.styles";
import { Highlighter } from "@/Typography";

const SectionHeader = ({ Title, Caption }: { Title: string; Caption: string }) => {
	return (
		<>
			<Highlighter big>{Title}</Highlighter>
			<HeaderCaption>{Caption}</HeaderCaption>
		</>
	);
};

export default SectionHeader;
