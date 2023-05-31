import {
	faBookmark,
	faComment,
	faHeart,
	faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Icons = () => {
	return (
		<Icon>
			<Left>
				<div>
					<FontAwesomeIcon
						icon={faHeart}
						style={{ width: "24px", height: "24px" }}
					/>
				</div>
				<div>
					<FontAwesomeIcon
						icon={faComment}
						style={{ width: "24px", height: "24px" }}
					/>
				</div>
				<div>
					<FontAwesomeIcon
						icon={faPaperPlane}
						style={{ width: "24px", height: "24px" }}
					/>
				</div>
			</Left>
			<div>
				<FontAwesomeIcon
					icon={faBookmark}
					style={{ width: "24px", height: "24px" }}
				/>
			</div>
		</Icon>
	);
};

export default Icons;

const Icon = styled.div`
	padding: 16px 0;
	display: flex;
	justify-content: space-between;

	div {
		cursor: pointer;
	}
`;

const Left = styled.div`
	display: flex;

	div {
		margin-right: 16px;
	}
`;
