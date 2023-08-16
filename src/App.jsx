import { useState } from "react";
import "./App.css";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";

function App() {
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy);

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
        <div className="main-content" onClick={() => setTextToCopy(transcript)}>
          <p>{transcript}</p>
        </div>
        <div className="btn-style">
          <button onClick={setCopied}>
            {isCopied ? "Copied 👍" : "Copy to clipboard"}
          </button>
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
