import styled from "styled-components";
import { flexCenter } from "styles/common";
import Slide from "components/slide/Slide";
import TextArea from "./components/TextArea";
import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, useItemStore } from "context/item";
import { useContext } from "react";
import PrevContext from "context/prev";
import ItemAddModal from "./modal/AddModal";
import Icons from "./components/ICons";
import useInput from "hooks/use-input";
import EditContext from "context/editMode";
import Comments from "./components/Comments";
import { flexAlignCenter } from "styles/common";
import { CommentEditContextProvider } from "context/commentEditMode";
const Main = () => {
	const { itemList, dispatch } = useItemStore();
	const { isPrev, setIsPrev } = useContext(PrevContext);
	const { isEditMode, setIsEditMode } = useContext(EditContext);
	const [editContent, onChangeEditContent, setValue] = useInput("");

	// --- 추가 함수 ---
	const onAddItem = (userId, content) => {
		// 1. 추가할 게시물 객체로 생성
		// 3. showItemModal에서 받아온 userId, content값을 넣어 payload 값으로 넘겨주고 dispatch를 실행하면 게시물이 추가된다.
		const newItem = {
			id: Math.floor(Math.random() * 100000),
			myContent: true,
			userId,
			content,
			Comments: [],
		};
		dispatch({ type: ADD_ITEM, payload: newItem });
		setIsPrev(false); // 위 과정이 끝면 모달창이 닫힌다.
	};

	// 2. input과 textarea에 입력한 값을 각각 userId, content 변수에 담고 추가 함수위 매개변수로 전달해준다
	const showItemModal = e => {
		e.preventDefault();
		const userId = e.target.userId.value;
		const content = e.target.content.value;
		onAddItem(userId, content);
	};

	// 4. 모달의 x 버튼을 누르면 닫힘.
	const onCloseModal = () => {
		setIsPrev(false);
	};

	// --- 수정 함수 ---
	const onUpdateItem = (id, content) => {
		// 5. 받아온 값을 payload 값에 넣어주어 dispatch 실행
		dispatch({ type: UPDATE_ITEM, payload: { id, content } });
		setValue(""); // 6. 수정 후 입력값 비워줌
	};

	// 수정 버튼 클릭 함수
	const onEditBtn = item => {
		// 1. 수정모드가 false이고 본인이 작성한 글일 때 수정 모드 true
		if (!isEditMode && item.myContent) return setIsEditMode(true);
		// 2. myContent가 false일 때 알림창 띄워줌(수정 불가)
		else window.confirm("본인이 작성한 글만 수정할 수 있습니다 :)");
		setIsEditMode(false); // 3. 수정모드 종료
	};

	// 글 수정 save 버튼 함수
	const onSaveBtn = (e, id, editContent) => {
		e.preventDefault();
		onUpdateItem(id, editContent); // 4. 해당 게시물의 id와 수정된 content의 입력값을 수정 함수 인자로 넘겨줌
		setIsEditMode(false);
	};

	// --- 삭제 함수 ---
	const onDeleteItem = (id, myContent) => {
		if (myContent) {
			// 1. myContent가 true일 때(내가 쓴 글일 때만 삭제)
			if (window.confirm("정말 삭제하시겠습니까?")) {
				// 해당 게시물의 id와 해당 게시물이 내가 쓴 글인지(myContent 의 값)를 dispatch payload 값으로 전달
				dispatch({ type: DELETE_ITEM, payload: { id, myContent } });
			}
		} else window.confirm("본인이 작성한 글만 삭제할 수 있습니다 :)"); // // myContent가 false일 때(내가 쓴 글이 아닐 때)
	};

	return (
		<>
			{/* 게시글 추가 -> 모달 */}
			{isPrev && (
				<ItemAddModal onAddItem={showItemModal} onClose={onCloseModal} />
			)}
			<S.Wrapper>
				<S.Container>
					<S.CreateBtn onClick={() => setIsPrev(prev => !prev)}>
						게시글 작성
					</S.CreateBtn>
					{itemList.map(item => (
						<S.ContentBox key={item.id}>
							<S.ContentBtns>
								<button onClick={() => onEditBtn(item)}>수정</button>
								<button onClick={() => onDeleteItem(item.id, item.myContent)}>
									삭제
								</button>
							</S.ContentBtns>
							{/* <S.SlideBox> */}
							<Slide />
							{/* </S.SlideBox> */}
							<S.ContentContainer>
								<Icons />
								<S.UserContent>
									<span>{item.userId}</span>
									{isEditMode ? (
										<form onSubmit={e => onSaveBtn(e, item.id, editContent)}>
											<input
												value={editContent}
												onChange={onChangeEditContent}
											/>
											<button type="submit">save</button>
										</form>
									) : (
										<span>{item.content}</span>
									)}
								</S.UserContent>
								<S.MoreComment>댓글 모두 보기</S.MoreComment>
								<CommentEditContextProvider>
									{/* itemId={item.id} 는 해당 게시물의 댓글만 추가 수정 삭제할 수 있도록 함. 설정해주지 않으면 모든 게시물의 댓글이 동기화됨 */}
									<Comments itemId={item.id} />
									<TextArea itemId={item.id} />
								</CommentEditContextProvider>
							</S.ContentContainer>
						</S.ContentBox>
					))}
				</S.Container>
			</S.Wrapper>
		</>
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
	margin-bottom: 50px;
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

const SlideBox = styled.div`
	width: 530px;
	height: 420px;
	border: 1px solid #222;
`;

const ContentContainer = styled.div`
	width: 530px;
`;
const UserContent = styled.div`
	${flexAlignCenter}
	justify-content: flex-start;
	span:first-of-type {
		margin-right: 8px;
		font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
	}

	form {
		display: flex;
		width: 100%;
		justify-content: flex-end;
	}

	input {
		width: 100%;
		border: none;
		border-bottom: 1px solid ${({ theme }) => theme.PALETTE.primary[200]};
		resize: none;
		outline: none;
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
	SlideBox,
	ContentContainer,
	UserContent,
	MoreComment,
};
