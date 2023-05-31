import { createContext, useState } from "react";

const CommentEditContext = createContext();

export default CommentEditContext;

export const CommentEditContextProvider = ({ children }) => {
	const [isEditMode, setIsEditMode] = useState(false);

	return (
		<CommentEditContext.Provider value={{ isEditMode, setIsEditMode }}>
			{children}
		</CommentEditContext.Provider>
	);
};
