import Lottie from "lottie-react";
import { useRef } from "react";

export default function HoverFunc({myImages}) {
	const lottieRef = useRef();
	const handleMouseEnter = () => {
		lottieRef.current.play();
	};
	const handleMouseLeave = () => {
		lottieRef.current.stop();
	};

	return (
		<div
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className="w-10 h-10 ml-2"
		>
			<Lottie
				lottieRef={lottieRef}
				animationData={myImages}
				loop
				autoplay={false}
			/>
		</div>
	);
}
