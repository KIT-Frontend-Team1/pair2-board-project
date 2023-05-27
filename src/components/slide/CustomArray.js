import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";

const CustomNextArrow = props => {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				position: "absolute",
				display: "block",
				background: "",
				right: "20px",
				zIndex: 20,
				width: "15px",
				height: "13px",
				bottom: "210px",
			}}
			onClick={onClick}
		>
			<FontAwesomeIcon icon={faRightLong} color="black" />
		</div>
	);
};

const CustomPrevArrow = props => {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				position: "absolute",
				display: "block",
				background: "",
				left: "20px",
				zIndex: 10000,
				marginTop: "200px",
				width: "15px",
				height: "13px",
			}}
			onClick={onClick}
		>
			<FontAwesomeIcon icon={faLeftLong} />
		</div>
	);
};

export { CustomNextArrow, CustomPrevArrow };
