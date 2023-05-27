import mockCatsData from "data/catsMock";
import styled from "styled-components";

const Comments = () => {
	return (
		<S.CommentContent>
			{mockCatsData.Comments.map(comment => (
				<li key={comment.id}>
					<span>{comment.nickname}</span>
					<span>{comment.comment}</span>
				</li>
			))}
		</S.CommentContent>
	);
};

export default Comments;

const CommentContent = styled.ul`
	li {
		margin-bottom: 10px;

		span:first-of-type {
			margin-right: 8px;
			font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
		}
	}
`;

const S = {
	CommentContent,
};
