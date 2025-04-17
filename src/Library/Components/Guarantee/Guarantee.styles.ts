import Image from "next/image";
import styled from "styled-components";
import { Breakpoints } from "@/Grids";

export const GuaranteeImg = styled(Image)`
	//width: 100%;
	//height: 100%;
	object-fit: cover;
`;
export const GuaranteeCard = styled.div`
	display: flex;
	//position: absolute;
	//top: 3rem;
	//left: 3rem;
	border-radius: 16px;

	padding: 48px 40px 48px 32px;
	background-image: url("/Satisfaction-guarantee-bk.png");

	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	& > svg {
		margin-inline-end: 1.5rem;
	}

	@media screen and (max-width: ${Breakpoints.sm}) {
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 48px 40px 48px 32px;
	}
`;
