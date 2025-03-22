import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import B01 from "./page/B01";
import FooterSection from "./section/FooterSection";

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
                    <Route path="/B01" element={<B01 />}/>
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
