import { StrictMode } from 'react'
import { createRoot } from "react-dom/client"
import App from "./components/App.tsx"
import "./index.css"
import AuthProvider from "./context/AuthProvider.tsx"

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
		<AuthProvider>
			<App />
		</AuthProvider>
	</StrictMode>
)