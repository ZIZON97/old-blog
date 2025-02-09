import './App.css'
import {BrowserRouter} from "react-router-dom";
import Header from "./_layouts/Header.tsx";
import Footer from "./_layouts/Footer.tsx";

function App() {
	
	return (
		<BrowserRouter>
			<Header></Header>
			박지헌
			<Footer></Footer>
		</BrowserRouter>
	)
}

export default App
