function VoiceButton({ onClick }) {
  return (
    <button className="micBtn" onClick={onClick}>
      🎤 Start Speaking
    </button>
  );
}

export default VoiceButton;