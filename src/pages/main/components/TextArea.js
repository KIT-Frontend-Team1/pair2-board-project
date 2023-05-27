import styled from "styled-components";

const TextArea = () => {
	return <Textarea placeholder="댓글 작성" />;
};

export default TextArea;

const Textarea = styled.textarea`
	width: 100%;
	border-top: none;
	border-right: none;
	resize: none;
	outline: none;
	border-left: none;
	font-family: "맑은 고딕";
	font-size: ${({ theme }) => theme.FONT_SIZE["semiMedium"]};
`;
