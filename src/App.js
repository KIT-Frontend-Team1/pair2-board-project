import { RouterProvider } from "react-router-dom";
import GlobalStyles from "styles/global";
import router from "./routes/Routing";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import ItemStoreProvider from "context/item";
import { PrevContextProvider } from "context/prev";
import { EditContextProvider } from "context/editMode";

function App() {
	return (
		<ItemStoreProvider>
			<PrevContextProvider>
				<EditContextProvider>
					<ThemeProvider theme={theme}>
						<GlobalStyles />
						<RouterProvider router={router} />
					</ThemeProvider>
				</EditContextProvider>
			</PrevContextProvider>
		</ItemStoreProvider>
	);
}

export default App;
