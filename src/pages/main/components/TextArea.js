const { faker } = require("@faker-js/faker");
import { ADD_COMMENTS, useItemStore } from "context/item";
import useInput from "hooks/use-input";
import styled from "styled-components";

const TextArea = ({ itemId }) => {
	const { dispatch } = useItemStore();
	const [newComments, onChangeNewComments, setValue] = useInput("");

	// --- 댓글 추가 ---
	const onCommentInput = () => {
		// 1. 추가할 댓글 객체 생성
		const newComment = {
			id: Math.floor(Math.random() * 100000),
			nickname: faker.person.firstName(),
			comment: newComments,
			myComment: true,
		};
		// 2. itemId => item.id 값과 추가한 댓글 값을 payload로 전달
		dispatch({ type: ADD_COMMENTS, payload: { itemId, comment: newComment } });
		setValue(""); // 3. 입력 후 값 비우기
	};
	return (
		<Container>
			<Textarea
				placeholder="댓글 작성"
				value={newComments}
				onChange={onChangeNewComments}
			/>
			<button onClick={onCommentInput}>등록</button>
		</Container>
	);
};

export default TextArea;

const Container = styled.div`
	height: 36px;
	display: flex;
	button {
		width: 60px;
		padding: 0;
	}
`;

const Textarea = styled.textarea`
	width: 100%;
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.PALETTE.primary[200]};
	resize: none;
	outline: none;
	font-family: "맑은 고딕";
	font-size: ${({ theme }) => theme.FONT_SIZE["semiMedium"]};
`;
