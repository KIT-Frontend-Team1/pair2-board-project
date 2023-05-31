import { createContext, useState } from "react";

const PrevContext = createContext();

export default PrevContext;

export const PrevContextProvider = ({ children }) => {
	const [isPrev, setIsPrev] = useState(false);

	return (
		<PrevContext.Provider value={{ isPrev, setIsPrev }}>
			{children}
		</PrevContext.Provider>
	);
};
