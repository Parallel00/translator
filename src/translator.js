import React, { useState } from "react";
import axios from "axios";
import "./translator.css";

function Translator(){
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("es");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSourceLanguageChange = (e) => {
    setSourceLanguage(e.target.value);
  };

  const handleTargetLanguageChange = (e) => {
    setTargetLanguage(e.target.value);
  };

  const handleTranslate = async () => {
    const options = {
      method: 'POST',
      url: 'https://translate-plus.p.rapidapi.com/translate',
      headers: {
        'x-rapidapi-key': 'e978d93128msh9a0d23411ab8a0fp16dfbcjsn9c3c4d21f62b',
        'x-rapidapi-host': 'translate-plus.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: {
        text: inputText,
        source: sourceLanguage,
        target: targetLanguage
      }
    };

    try {
      const response = await axios.request(options);
      setOutputText(response.data.translations.translation);
    } catch (error) {
      console.error(error);
      setOutputText("Translation failed. Please try again.");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }} id="container">
      <div>
        <select value={sourceLanguage} onChange={handleSourceLanguageChange}>
		  <option value="auto">Auto Detect</option>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="nl">Dutch</option>
		  <option value="it">Italian</option>
		  <option value="pt">Portuguese</option>
          <option value="zh-CN">Chinese (Simplified)</option>
		  <option value="zh-TW">Chinese (Traditional)</option>
		  <option value="ja">Japanese</option>
		  <option value="ko">Korean</option>
		  <option value="ru">Russian</option>
		  <option value="ar">Arabic</option>
		  <option value="hi">Hindi</option>
		  <option value="iw">Hebrew</option>
        </select>
        <select value={targetLanguage} onChange={handleTargetLanguageChange}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="nl">Dutch</option>
		  <option value="it">Italian</option>
		  <option value="pt">Portuguese</option>
          <option value="zh-CN">Chinese (Simplified)</option>
		  <option value="zh-TW">Chinese (Traditional)</option>
		  <option value="ja">Japanese</option>
		  <option value="ko">Korean</option>
		  <option value="ru">Russian</option>
		  <option value="ar">Arabic</option>
		  <option value="hi">Hindi</option>
		  <option value="iw">Hebrew</option>
        </select>
      </div>

      <div style={{ margin: "20px 0" }}>
        <textarea
          style={{ width: "400px", height: "150px" }}
          placeholder="Enter text to translate..."
          value={inputText}
          onChange={handleInputChange}
        />
      </div>

      <button onClick={handleTranslate}>Translate</button>

      <div style={{ margin: "20px 0" }}>
        <textarea
          style={{ width: "400px", height: "150px" }}
          placeholder="Translation output..."
          value={outputText}
          readOnly
        />
      </div>
    </div>
  );
};

export default Translator;
