function ChatBx({ question, answer }) {
  return (
    <div className="chat">
      <div className="user">
        <h3>Question</h3>
        <p>{question}</p>
      </div>

      <div className="bot">
        <h3>Answer</h3>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default ChatBx;