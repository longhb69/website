import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import FooterSection from "./section/FooterSection";
import CarClass from "./page/CarClass";

function Layout({ children }) {
    return (
        <div>
            <main className="flex-grow">{children}</main>
            <FooterSection/>
        </div>
    )
}

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/hangxe/:name" element={<CarClass />}/>
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
