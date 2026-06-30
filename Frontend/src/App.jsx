import { useState } from "react";
import axios from 'axios'
import Header from "./components/Header";
import VoiceButton from "./components/VoiceButton";
import ChatBx from "./components/ChatBx";
import "./App.css"

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.interimResults = false;

    recognition.start();

    recognition.onresult = async (event) => {
      const text = event.results[0][0].transcript;

      setQuestion(text);

      try {
        const res = await axios.post("https://voicebotassitance.onrender.com/ask", {
          question: text,
        });

        setAnswer(res.data.answer);

        const speech = new SpeechSynthesisUtterance(res.data.answer);

        speech.lang = "en-US";

        window.speechSynthesis.speak(speech);

      } catch (err) {
        alert("Backend Error");
        console.log(err);
      }
    };
  };

  return (
    <div className="container">
      <Header />

      <VoiceButton onClick={startListening} />

      <ChatBx
        question={question}
        answer={answer}
      />
    </div>
  );
}

export default App;