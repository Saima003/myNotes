import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./assets/HeroSection";
import Sidebar from "./components/Sidebar";

const Dashboard = () => <div>Main Content</div>;
const Profile = () => <div>Profile Content</div>;
const Settings = () => <div>Settings Content</div>;

function App() {
  return (
    <>
      <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<HeroSection />} />
        </Routes>
        </Sidebar>
      </Router>
    </>
  );
}

export default App;
