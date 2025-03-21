import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import SignUp from "./page/SignUp";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dang-ky" element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default App;
