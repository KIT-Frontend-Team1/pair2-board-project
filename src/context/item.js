import mockCatsData from "data/catsMock";
import { createContext, useContext, useReducer } from "react";

// 초기값으로 목데이터 가져옴
const initialState = mockCatsData;

// 저장고 생성하여 컴포넌트 전역으로 쓸 수 있도록 useContext에 넣어줌
export const useItemStore = () => useContext(ItemStore);
const ItemStore = createContext();

// 댓글
export const ADD_ITEM = "ADD_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

// 코멘트
export const ADD_COMMENTS = "ADD_COMMENTS";
export const UPDATE_COMMENTS = "UPDATE_COMMENTS";
export const DELETE_COMMENTS = "DELETE_COMMENTS";

const itemReducer = (state, action) => {
	// 게시글 추가, 수정, 삭제 로직
	switch (action.type) {
		case ADD_ITEM: {
			return [action.payload, ...state];
		}
		case UPDATE_ITEM: {
			const { id, content } = action.payload;
			// 해당 게시물을 찾고 해당 게시물 + 본인 작성 글인 경우 action.payload에서 받아온 content로 업데이트한다.
			const todo = state.find(todo => todo.id === id);
			if (todo && todo.myContent) {
				todo.content = content;
			}
			return [...state]; // else 경우 원본 배열의 불변성을 지키며 리턴해준다.
		}
		case DELETE_ITEM: {
			const { id, myContent } = action.payload;
			// 1. 해당 게시물이 아닌 것만 필터링하여 보여주거나
			// 2. myContent가 true 때 !myContent는 false가 되므로, false한 값은 필터링되어 보여지지 않게하는 로직
			return state.filter(item => item.id !== id || !myContent);
		}
		// 댓글 추가, 수정, 삭제 로직
		case ADD_COMMENTS: {
			const { itemId, comment } = action.payload;
			return state.map(item => {
				// 해당 게시물일 때만 로직 실행
				if (item.id === itemId) {
					const addComments = [...item.Comments, comment]; // 기존 댓글 뒤에 action.payload로 가져온 comment 추가
					return { ...item, Comments: addComments }; // 기존 게시물 복사, 댓글은 기존댓글 + 추가된 댓글로 업데이트
				}
				return item; // item.id !== itemId 일 때는 기존 item 유지
			});
		}
		case UPDATE_COMMENTS: {
			const { itemId, commentId, updatedComment } = action.payload;
			return state.map(item => {
				// 해당 게시물일 때만 로직을 실행
				if (item.id === itemId) {
					// 해당 게시물에서 댓글을 순회하여 id값으로 해당 댓글인 것만 찾아 기존 댓글 앞에 복사하고 comment.comment를 payload로 받아온 값인 comment: updatedComment.comment 로 업데이트한다.
					const comments = item.Comments.map(comment => {
						if (comment.id === commentId) {
							return { ...comment, comment: updatedComment.comment };
						}
						return comment; // else 구문 (comment.id !== commentId)
					});
					return { ...item, Comments: comments }; // 최종 댓글은 수정된 댓글로 반환
				}
				return item; // else 구문 (item.id !== itemId)
			});
		}
		case DELETE_COMMENTS: {
			const { itemId, commentId } = action.payload;
			return state.map(item => {
				// item.id와 itemId가 일치하는 경우(해당 게시물일 때만 로직을 실행)
				if (item.id === itemId) {
					// item의 Comments에서 comment.id와 commentId가 일치하지 않는 것만 필터링하여 나머지 댓글은 그대로 보여줌
					const deleteItemList = item.Comments.filter(
						comment => comment.id !== commentId,
					);
					return { ...item, Comments: deleteItemList };
				}
				return item; // else일 때 기존 item 유지
			});
		}
		default:
			return state;
	}
};

const ItemStoreProvider = ({ children }) => {
	const [itemList, dispatch] = useReducer(itemReducer, initialState);
	return (
		<ItemStore.Provider value={{ itemList, dispatch }}>
			{children}
		</ItemStore.Provider>
	);
};

export default ItemStoreProvider;
