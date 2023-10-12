import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import './App.css';
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Games from "./pages/Games";
import Homepage from "./pages/Homepage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Skills from "./pages/Skills";
import TicTacToe from "./pages/TicTacToe";
import Trivia from "./pages/Trivia";
import TypingSpeedTest from "./pages/TypingSpeedTest";
import LogicalThinking from "./pages/LogicalThinking";
import SpatialAwareness from "./pages/SpatialAwareness";
import ProblemSolving from "./pages/ProblemSolving";
import MathSkills from "./pages/MathSkills";
import EnglishSkills from "./pages/EnglishSkills";
import FineMotorSkills from "./pages/FineMotorSkills";
import StrategicPlanning from "./pages/StrategicPlanning";
import Collaboration from "./pages/Collaboration";
import Creativity from "./pages/Creativity";
import Memory from "./pages/Memory";
import Communication from "./pages/Communication";
import AttentionAndConcentration from "./pages/AttentionAndConcentration";
import LanguageAndReading from "./pages/LanguageAndReading";
import TimeManagement from "./pages/TimeManagement";
import PersistenceAndResilience from "./pages/PersistenceAndResilience";
import Snake from "./pages/Snake";
import Hangman from "./pages/Hangman";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<Homepage />} />
                    <Route path="games" element={<Games />}>
                        <Route path="tic-tac-toe" element={<TicTacToe />} />
                        <Route path="trivia" element={<Trivia />} />
                        <Route path="typingSpeedTest" element={<TypingSpeedTest />} />
                        <Route path="snake" element={<Snake />} />
                        <Route path="hangman" element={<Hangman />} />
                    </Route>
                    <Route path="skills" element={<Skills />}>
                        <Route path="logicalThinking" element={<LogicalThinking />} />
                        <Route path="spatialAwareness" element={<SpatialAwareness />} />
                        <Route path="problemSolving" element={<ProblemSolving />} />
                        <Route path="mathSkills" element={<MathSkills />} />
                        <Route path="englishSkills" element={<EnglishSkills />} />
                        <Route path="fineMotorSkills" element={<FineMotorSkills />} />
                        <Route path="strategicPlanning" element={<StrategicPlanning />} />
                        <Route path="collaboration" element={<Collaboration />} />
                        <Route path="creativity" element={<Creativity />} />
                        <Route path="memory" element={<Memory />} />
                        <Route path="communication" element={<Communication />} />
                        <Route path="attentionAndConcentration" element={<AttentionAndConcentration />} />
                        <Route path="languageAndReading" element={<LanguageAndReading />} />
                        <Route path="timeManagement" element={<TimeManagement />} />
                        <Route path="persistenceAndResilience" element={<PersistenceAndResilience />} />
                    </Route>
                    <Route path="aboutUs" element={<AboutUs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="signup" element={<SignUp />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
