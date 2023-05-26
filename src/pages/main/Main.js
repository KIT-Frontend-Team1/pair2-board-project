import styled from "styled-components";
import { flexCenter } from "styles/common";

const Main = () => {
	return (
		<S.Wrapper>
			<S.Container>
				<S.CreateBtn>게시글 작성</S.CreateBtn>
				<S.ContentBox>test</S.ContentBox>
			</S.Container>
			<S.Side></S.Side>
		</S.Wrapper>
	);
};

export default Main;

const Wrapper = styled.div`
	width: 100%;
	${flexCenter}
`;

const Container = styled.div`
	width: 750px;
	height: 820px;
	margin: 70px 0;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-end;
`;

const CreateBtn = styled.button`
	margin-bottom: 30px;
	background-color: ${({ theme }) => theme.PALETTE.brandColor};
`;

const ContentBox = styled.div`
	width: 100%;
	height: 100%;
	border: 1px solid ${({ theme }) => theme.PALETTE.primary[200]};
`;

const Side = styled.div`
	width: 750px;
	height: 820px;
	margin-left: 120px;
	border: solid;
`;

const S = {
	Wrapper,
	Container,
	CreateBtn,
	ContentBox,
	Side,
};
