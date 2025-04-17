import { motion } from "framer-motion";
import styled from "styled-components";
import { Breakpoints, Col } from "@/Grids";

export const ScrollContainer = styled(motion.div)`
	//height: 100dvh;
	//overflow-y: auto;
	//display: flex;
	//justify-content: space-between;
	align-items: start;
	//position: relative;
	////gap: 2.5rem;
	//border-radius: 0.5rem;
	//padding: 2.5rem 0;

	display: flex;
	//overflow-y: auto;
	position: relative;
	padding: 2.5rem;
	margin-left: 2.5rem;
	justify-content: center;
	border-radius: 0.375rem;
	//height: 30rem;

	@media screen and (max-width: ${Breakpoints.xl}) {
		margin-left: unset;
		padding: unset;
	}
	@media screen and (max-width: ${Breakpoints.sm}) {
		margin-left: unset;
	}
`;

export const CardContainer = styled(Col)`
	display: flex;
	flex-direction: column;
	align-items: center;
	//position: sticky;
	//top: 10px;
`;

export const Card = styled.div`
	margin: 5rem 0;
	//position: sticky;
	//top: 0;
	@media screen and (max-width: ${Breakpoints.sm}) {
		margin: 1rem 0;
	}
`;

export const CardTitle = styled(motion.h2)``;

export const BackgroundContent = styled(Col)`
	//display: none;
	//border-radius: 0.5rem;
	//position: sticky;
	//top: 0;

	//display: none;
	overflow: hidden;
	position: sticky;
	top: 25%;
	border-radius: 0.375rem;
	//width: 20rem;
	background-color: #ffffff;

	@media screen and (max-width: ${Breakpoints.xl}) {
		overflow: unset;
	}
	@media screen and (max-width: ${Breakpoints.xl}) {
		display: none;
	}
`;
