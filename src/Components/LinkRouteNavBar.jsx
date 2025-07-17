import { Link } from "react-router";
import Lottie from "lottie-react";
import { useRef } from "react";

export default function LinkRoutNavBar({ Route, Text, MyImageNavBar }) {
	const lottieRef = useRef();
	const handleMouseEnter = () => {
		lottieRef.current.play();
	};
	const handleMouseLeave = () => {
		lottieRef.current.stop();
	};

	return (
		<li
			className="flex text-center items-center"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<Link
				to={{
					pathname: `${Route}`,
				}}
				className="flex justify-evenly items-center w-full text-white text-xl rounded-2xl hover:bg-gradient-to-r hover:from-white/30 hover:to-white/3 hover:opacity-65"
			>
				<Lottie
					className="w-14"
					lottieRef={lottieRef}
					animationData={MyImageNavBar}
					loop
					autoplay={false}
				/>
				{Text}
			</Link>
		</li>
	);
}
