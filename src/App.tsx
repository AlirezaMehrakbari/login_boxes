import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/loginPage.tsx";
import HomePage from "./pages/homePage.tsx";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route   path="/" element={<LoginPage/>}/>
                <Route  path="/home" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
