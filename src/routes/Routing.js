import Layout from "components/layout/Layout";
import Best from "pages/best/Best";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Best />,
			},
		],
	},
]);

export default router;
