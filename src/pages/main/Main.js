import styled from "styled-components";
import { flexCenter } from "styles/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBookmark,
	faComment,
	faHeart,
	faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import Slide from "components/slide/Slide";
import mockCatsData from "data/catsMock";
import Comments from "./components/Comments";
import TextArea from "./components/TextArea";

const Main = () => {
	console.log(mockCatsData);
	console.log(mockCatsData.Comments);
	return (
		<S.Wrapper>
			<S.Container>
				<S.CreateBtn>게시글 작성</S.CreateBtn>
				<S.ContentBox>
					<S.ContentBtns>
						<button>수정</button>
						<button>삭제</button>
					</S.ContentBtns>
					{/* <S.SlideBox> */}
					<Slide />
					{/* </S.SlideBox> */}
					<S.Icons>
						<S.Left>
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
						</S.Left>
						<div>
							<FontAwesomeIcon
								icon={faBookmark}
								style={{ width: "24px", height: "24px" }}
							/>
						</div>
					</S.Icons>
					<div style={{ width: "530px" }}>
						<S.UserContent>
							<span>{mockCatsData.userId}</span>
							<span>{mockCatsData.content}</span>
						</S.UserContent>
						<S.MoreComment>댓글 모두 보기</S.MoreComment>
						<Comments />
						<TextArea />
					</div>
				</S.ContentBox>
			</S.Container>
		</S.Wrapper>
	);
};

export default Main;

const Wrapper = styled.div`
	width: 100%;
	${flexCenter}
`;

const Container = styled.div`
	margin: 70px 0;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-end;
`;

const CreateBtn = styled.button`
	margin-bottom: 30px;
`;

const ContentBox = styled.div`
	width: 630px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #fff;
	height: 100%;
	padding: 40px 0px;
	/* padding: 40px 50px; */
	box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.06);
`;

const ContentBtns = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 530px;
	height: 32px;
	margin-bottom: 20px;

	button {
		margin-left: 16px;
	}
`;

const Icons = styled.div`
	width: 100%;
	padding: 16px 50px;
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

const SlideBox = styled.div`
	width: 530px;
	height: 420px;
	border: 1px solid #222;
`;
const UserContent = styled.div`
	span:first-of-type {
		margin-right: 8px;
		font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
	}
`;

const MoreComment = styled.p`
	padding: 10px 0;
	color: #757575;
	cursor: pointer;
`;

const S = {
	Wrapper,
	Container,
	CreateBtn,
	ContentBox,
	ContentBtns,
	Icons,
	SlideBox,
	Left,
	UserContent,
	MoreComment,
};
