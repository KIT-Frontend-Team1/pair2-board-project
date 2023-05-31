const { faker } = require("@faker-js/faker");
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommentEditContext from "context/commentEditMode";
import { DELETE_COMMENTS, UPDATE_COMMENTS, useItemStore } from "context/item";
import useInput from "hooks/use-input";
import { useContext } from "react";
import styled from "styled-components";

const Comments = ({ itemId }) => {
	const { itemList, dispatch } = useItemStore();
	const { isEditMode, setIsEditMode } = useContext(CommentEditContext);
	const [editComments, onChangeEditComments, setValue] = useInput("");
	// myCommet: true일 때 댓글 뒤에 수정, 삭제 버튼 생성
	// --- 댓글 수정 ---
	const onUpdateComment = (itemId, commentId) => {
		// 1. editMode가 true가 되면 span comment 값이 input값으로 바뀜
		if (!isEditMode) return setIsEditMode(true);
		// 2. 수정할 코멘트 값 객체로 생성
		const updatedComment = {
			id: Math.floor(Math.random() * 100000),
			nickname: faker.person.firstName(),
			comment: editComments,
			myComment: true,
		};
		// 3. itemId(해당 게시물인지)의 id와 해당 댓글 id인 comment.id, 수정된 코멘트 값을 dispatch의 payload 값으로 넘겨줌
		dispatch({
			type: UPDATE_COMMENTS,
			payload: { itemId, commentId, updatedComment },
		});
		setIsEditMode(false); // 4. 수정모드 close
		setValue(""); // 5. 입력 값 초기화
	};

	// --- 댓글 삭제 ---
	const onDeleteComment = (itemId, commentId) => {
		// 1. itemId(해당 게시물)의 id와 해당 댓글의 id를 dispatch의 payload 값으로 넘겨줌
		dispatch({ type: DELETE_COMMENTS, payload: { itemId, commentId } });
	};

	return (
		<S.CommentContent>
			{itemList.map(item => {
				if (item.id === itemId) {
					return item.Comments.map(comment => (
						<li key={comment.id}>
							<div>
								<span>{comment.nickname}</span>
								{isEditMode && comment.myComment ? (
									<input value={editComments} onChange={onChangeEditComments} />
								) : (
									<span>{comment.comment}</span>
								)}
							</div>
							{comment.myComment && (
								<S.UDBtns>
									{/* 수정, 삭제 아이콘 */}
									{isEditMode ? (
										<FontAwesomeIcon
											icon={faPen}
											onClick={() => onUpdateComment(itemId, comment.id)}
										/>
									) : (
										<>
											<FontAwesomeIcon
												icon={faPen}
												onClick={() => onUpdateComment(itemId, comment.id)}
											/>
											<FontAwesomeIcon
												icon={faTrashCan}
												onClick={() => onDeleteComment(itemId, comment.id)}
											/>
										</>
									)}
								</S.UDBtns>
							)}
						</li>
					));
				}
				// return null;
			})}
		</S.CommentContent>
	);
};

export default Comments;

const CommentContent = styled.ul`
	li {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;

		span:first-of-type {
			margin-right: 8px;
			font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
		}
	}
`;

const UDBtns = styled.div`
	& svg {
		margin-left: 10px;
		cursor: pointer;
	}
`;

const S = {
	CommentContent,
	UDBtns,
};
