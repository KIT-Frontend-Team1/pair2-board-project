import { createContext, useState } from "react";

const EditContext = createContext();

export default EditContext;

export const EditContextProvider = ({ children }) => {
	const [isEditMode, setIsEditMode] = useState(false);

	return (
		<EditContext.Provider value={{ isEditMode, setIsEditMode }}>
			{children}
		</EditContext.Provider>
	);
};
