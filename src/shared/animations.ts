import { Keyframes, keyframes } from "styled-components";

export const pulse = (): Keyframes => keyframes`
	0% {
		opacity: 1;
		transform: scale(1);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
	}

	50% {
		opacity: 1;
		transform: scale(1.10);
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	}

	100% {
		opacity: 1;
		transform: scale(1);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}`;

export const fadeIn = (): Keyframes => keyframes`
    0% {opacity: 0};
    100% {opacity: 1};
`;

export const fadeInPulse = (): Keyframes => keyframes`
	0% {
		transform: scale(1);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
		opacity: 0;
	}

	50% {
		transform: scale(1.10);
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
		opacity: 1;
	}

	100% {
		transform: scale(1);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
		opacity: 1;
`;

export const show = (): Keyframes => keyframes`
	0% {opacity: 1};
	100% {opacity: 1};
`;
