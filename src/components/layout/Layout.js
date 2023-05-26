import Main from "pages/main/Main";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<Header />
			<Main />
			<Outlet />
		</>
	);
};

export default Layout;
