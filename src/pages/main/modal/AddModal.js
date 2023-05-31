import styled from "styled-components";
import { flexAlignCenter, flexCenter, modalBackGround } from "styles/common";

const ItemAddModal = ({ onAddItem, onClose }) => {
	return (
		<S.Wrapper>
			<S.Form onSubmit={onAddItem}>
				<S.Title>
					<span>게시물을 작성해주세요</span>
					<button type="button" onClick={onClose}>
						x
					</button>
				</S.Title>
				<S.Content>
					<input placeholder="아이디를 입력해주세요" name="userId" />
					<textarea placeholder="내용을 입력해주세요" name="content"></textarea>
				</S.Content>
				<S.Button>작성</S.Button>
			</S.Form>
		</S.Wrapper>
	);
};

export default ItemAddModal;

const Wrapper = styled.div`
	${modalBackGround};
	z-index: 1000;
`;

const Form = styled.form`
	width: 480px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: ${({ theme }) => theme.PALETTE.white};
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
	padding: 32px;
`;

const Title = styled.div`
	font-size: 24px;
	${flexAlignCenter};
	justify-content: space-between;

	& > button {
		border: none;
		cursor: pointer;

		:hover {
			transform: scale(1.1);
		}
	}
`;

const Content = styled.div`
	${flexCenter};
	margin-top: 16px;
	flex-direction: column;

	& > input {
		width: 100%;
		height: 40px;
		border: none;
		outline: none;
		border-radius: 8px;
		padding: 0 16px;
		margin-bottom: 16px;
	}

	& > textarea {
		width: 100%;
		height: 200px;
		border: none;
		outline: none;
		border-radius: 8px;
		padding: 16px;
		resize: none;
		font-family: "맑은 고딕";
	}
`;

const Button = styled.button`
	display: block;
	padding: 8px 16px;
	color: #fff;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.PALETTE.primary[300]};
	margin: 0 auto;
	cursor: pointer;
	:hover {
		font-weight: bold;
		color: ${({ theme }) => theme.PALETTE.brandColor};
		background-color: ${({ theme }) => theme.PALETTE.primary[100]};
	}
`;

const S = {
	Wrapper,
	Form,
	Content,
	Title,
	Button,
};
