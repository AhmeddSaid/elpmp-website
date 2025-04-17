import { motion } from "framer-motion";
import styled from "styled-components";
import { Col } from "@/Grids";

export const ManagementStickyScrollContainer = styled(motion.div)`
	display: flex;
	justify-content: space-between;
	//align-items: start;
	min-height: 400vh;
`;

export const ManagementStickyScrollCardContainer = styled(Col)`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 3.44rem;
	position: sticky;
	top: 7rem;
	height: calc(100vh - 5rem);
`;

export const ManagementStickyScrollCardTitle = styled(motion.h2)`
	padding-inline: 2.5rem;
	padding-block: 2rem;
	border-radius: 1.25rem;
	width: 100%;
`;

export const ManagementStickyScrollBackgroundContent = styled(Col)`
	overflow: hidden;
	position: sticky;
	top: 5rem;
	height: calc(100vh - 5rem);
`;
