import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./assets/HeroSection";
import Sidebar from "./assets/Sidebar";
import { MotionConfig } from "framer-motion";
// import Sidebar from "./components/Sidebar";

// const Dashboard = () => <div>Main Content</div>;
// const Profile = () => <div>Profile Content</div>;
// const Settings = () => <div>Settings Content</div>;

function App() {
  return (
    <>
      {/* <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<HeroSection />} />
        </Routes>
        </Sidebar>
      </Router> */}
     <MotionConfig transition={{ type: "spring", bounce: 0, duration: 0.4 }}>
      <Router>
        <div className="d-flex">
          <Sidebar />
          <main className={`flex-fill main-container`} >
            <Routes>
              <Route path="/" element={<HeroSection />} />
              {/* <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} /> */}
            </Routes>
          </main>
        </div>
      </Router>
    </MotionConfig>
    </>
  );
}

export default App;
