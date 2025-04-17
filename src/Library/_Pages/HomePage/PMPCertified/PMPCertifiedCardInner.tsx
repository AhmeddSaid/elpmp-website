import Image from "next/image";
import React from "react";
import { PMPCertifiedColInner } from "./PMPCertifiedCardInner.styles";

const PMPCertifiedCardInner = ({
	marginTop,
	marginBottom,
	HeadingColor,
	ColorHeading,
	WhiteHeading,
	imgPath,
	imgWidth,
	imgHeight,
	HeadingWidth,
	overlay,
}: {
	marginTop?: number;
	marginBottom?: number;
	HeadingColor?: string;
	ColorHeading?: string;
	WhiteHeading?: string;
	imgPath: string;
	imgWidth?: number;
	imgHeight: number;
	HeadingWidth?: number;
	overlay?: boolean;
}) => {
	return (
		<>
			<PMPCertifiedColInner
				marginTop={marginTop}
				marginBottom={marginBottom}
				HeadingColor={HeadingColor}
				HeadingWidth={HeadingWidth}
				overlay={overlay}
			>
				<Image src={imgPath} height={imgHeight} width={imgWidth} alt="" />
				<h1>
					<span>{ColorHeading}</span>
					<span>{WhiteHeading}</span>
				</h1>
			</PMPCertifiedColInner>
		</>
	);
};

export default PMPCertifiedCardInner;
