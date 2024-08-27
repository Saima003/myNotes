import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addKeyInDB, getData } from "../Utils";

const HeroSection = () => {
  const [inputText, setInputText] = useState("");
  const [hash, setHash] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
console.log(inputText,"input")
  useEffect(() => {
    let currentHash = location.hash.substring(1);
    if (!currentHash) {
      const newId = uuidv4();
      navigate(`#${newId}`, { replace: true });
      currentHash = newId;
    }
    setHash(currentHash);
  }, [navigate, location]);

  useEffect(() => {
    if (hash) {
      setInputText("");
      getData(hash, setInputText);
    }
  }, [hash]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputText(value);
    if (hash) {
      addKeyInDB(hash, setInputText, value);
    }
  };

  return (
    <>
      <textarea placeholder="Type your notes" style={{height:"100%", width:"100%"}} value={inputText.trim()} onChange={handleInputChange} />
    </>
  );
};

export default HeroSection;
