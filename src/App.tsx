import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { FaqWidgetProvider } from "./providers/FaqWidgetProvider";
import { useState } from "react";

const App = () => {
	const [open, setOpen] = useState(false);

	return (
		<FaqWidgetProvider.Provider value={{ open, setOpen }}>
			<RouterProvider router={router} />
		</FaqWidgetProvider.Provider>
	);
};

export default App;
