import { useState } from "react";
import "./App.css";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function App() {
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
      <div className="container">
        <h2>Speech To Text Converter</h2>
        <p>
          A react hook that converts speech from the microphone and make sit
          available to our React Components
        </p>
        <div className="main-content">
          <p>{transcript}</p>
        </div>
        <div className="btn-style">
          <button>Copy to clipboard</button>
          <button onClick={startListening}>Start Listening</button>
          <button onClick={SpeechRecognition.stopListening}>
            Stop Listening
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
