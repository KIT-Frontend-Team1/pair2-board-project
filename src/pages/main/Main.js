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

const Main = () => {
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
						<div>
							<FontAwesomeIcon icon={faBookmark} />
						</div>
					</S.Icons>
				</S.ContentBox>
			</S.Container>
		</S.Wrapper>
	);
};

export default Main;

const Wrapper = styled.div`
	background-color: #f8f8f8;
	width: 100%;
	${flexCenter}
`;

const Container = styled.div`
	/* width: 630px; */
	height: 820px;
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
	/* padding: 40px 0px; */
	box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.05);
`;

const ContentBtns = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 530px;
	height: 35px;
	margin-bottom: 20px;

	button {
		margin-left: 16px;
	}
`;

const Icons = styled.div`
	display: flex;

	div {
		padding: 16px 8px;
		cursor: pointer;
	}
`;

const SlideBox = styled.div`
	width: 530px;
	height: 420px;
	border: 1px solid #222;
`;

const S = {
	Wrapper,
	Container,
	CreateBtn,
	ContentBox,
	ContentBtns,
	Icons,
	SlideBox,
};
