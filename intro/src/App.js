import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./component/menu";
import DriftPage from "./pages/drift.page";
import ForzaPage from "./pages/forza.page";
import HomePage from "./pages/home.page";
import TimeAttackPage from "./pages/time-attack.page";

export default function App() {
    return (
        <Router>
            <div>
                <Menu />
                <div className="page">
                    <Routes>
                        <Route exact path="/" element={<HomePage/>} />
                        <Route exact path="/drift" element={<DriftPage/>} />
                        <Route exact path="/timeattack" element={<TimeAttackPage/>} />
                        <Route exact path="/forza" element={<ForzaPage/>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}