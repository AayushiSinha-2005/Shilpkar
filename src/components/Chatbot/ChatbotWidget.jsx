import React, { useEffect, useState } from "react";import "./ChatbotWidget.css";

// Development backend
const API_URL = "https://api.shilpkarfactory.com/chat";
// Create one session for the current browser session
const getSessionId = () => {
  let sessionId = sessionStorage.getItem("shilpkar_chat_session");

  if (!sessionId) {
    sessionId = `web-${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 9)}`;

    sessionStorage.setItem(
      "shilpkar_chat_session",
      sessionId
    );
  }

  return sessionId;
};

const SESSION_ID = getSessionId();

const quickQuestions = [
  "Get a Quotation",
  "What products does SHILPKAR offer?",
  "What is the reference price of SHILPKAR Translucent?",
  "What lighting options are available?",
  "What is the warranty?",
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "bot",
      text:
        "Hello! I'm the SHILPKAR AI Assistant. How can I help you with our ceiling and interior solutions?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // ----------------------------------------
  // QUOTATION MODE
  // ----------------------------------------

  const [quotationMode, setQuotationMode] = useState(false);

    useEffect(() => {
    const openChatbot = () => {
      setIsOpen(true);
    };

    window.addEventListener(
      "open-shilpkar-chatbot",
      openChatbot
    );

    return () => {
      window.removeEventListener(
        "open-shilpkar-chatbot",
        openChatbot
      );
    };
  }, []);

  // ----------------------------------------
  // SEND MESSAGE
  // ----------------------------------------

  const sendMessage = async (
    customMessage = null,
    customMode = "chat"
  ) => {
    const message = (
      customMessage !== null ? customMessage : input
    ).trim();

    if (!message || loading) return;

    // Determine which mode should be sent
    const modeToSend =
      customMode !== "chat"
        ? customMode
        : quotationMode
          ? "quotation"
          : "chat";

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: message,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: message,
          session_id: SESSION_ID,
          mode: modeToSend,
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Server error: ${response.status}`
        );
      }

      const data = await response.json();

      // ----------------------------------------
      // IF QUOTATION FLOW IS ACTIVE
      // ----------------------------------------

      if (data.intent === "quotation") {
        setQuotationMode(true);
      }

      // ----------------------------------------
      // BOT RESPONSE
      // ----------------------------------------

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text:
            data.answer ||
            "Sorry, I could not generate a response right now.",
        },
      ]);

    } catch (error) {

      console.error(
        "SHILPKAR chatbot error:",
        error
      );

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text:
            "Sorry, I'm unable to connect to the SHILPKAR AI server right now. Please try again shortly or contact us at +91 8171771229.",
        },
      ]);

    } finally {

      setLoading(false);

    }
  };


  // ----------------------------------------
  // QUICK QUESTION
  // ----------------------------------------

  const askQuickQuestion = (question) => {

    // Get a Quotation starts quotation mode
    if (question === "Get a Quotation") {

      setQuotationMode(true);

      sendMessage(
        question,
        "quotation"
      );

      return;
    }

    // All other quick questions are normal chat
    sendMessage(
      question,
      "chat"
    );
  };


  // ----------------------------------------
  // ENTER KEY
  // ----------------------------------------

  const handleKeyDown = (event) => {

    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {

      event.preventDefault();

      sendMessage();
    }
  };


  return (
    <>
      


      {/* =====================================
          CHAT WINDOW
      ====================================== */}

      {isOpen && (

        <div className="shilpkar-chatbot-window">

          {/* HEADER */}

          <div className="shilpkar-chatbot-header">

            <div className="shilpkar-chatbot-brand">

              <div className="shilpkar-chatbot-avatar">
                ✦
              </div>

              <div>

                <div className="shilpkar-chatbot-title">
                  SHILPKAR AI
                </div>

                <div className="shilpkar-chatbot-status">

                  <span className="shilpkar-status-dot"></span>

                  Online Assistant

                </div>

              </div>

            </div>


            <button
              className="shilpkar-chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
            >
              ×
            </button>

          </div>


          {/* MESSAGES */}

          <div className="shilpkar-chatbot-messages">

            {messages.map(
              (message, index) => (

                <div
                  key={index}
                  className={`shilpkar-message ${
                    message.role === "user"
                      ? "shilpkar-message-user"
                      : "shilpkar-message-bot"
                  }`}
                >
                  {message.text}
                </div>

              )
            )}


            {loading && (

              <div className="shilpkar-message shilpkar-message-bot shilpkar-typing">

                <span></span>
                <span></span>
                <span></span>

              </div>

            )}

          </div>


          {/* QUICK QUESTIONS */}

          {messages.length === 1 && (

            <div className="shilpkar-quick-section">

              <div className="shilpkar-quick-title">
                Quick Questions
              </div>


              <div className="shilpkar-quick-buttons">

                {quickQuestions.map(
                  (question, index) => (

                    <button
                      key={index}
                      onClick={() =>
                        askQuickQuestion(question)
                      }
                      disabled={loading}
                      className={
                        question === "Get a Quotation"
                          ? "shilpkar-quick-button shilpkar-quotation-button"
                          : "shilpkar-quick-button"
                      }
                    >
                      {question}
                    </button>

                  )
                )}

              </div>

            </div>

          )}


          {/* INPUT */}

          <div className="shilpkar-chatbot-input-area">

            <input
              type="text"
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              onKeyDown={handleKeyDown}
              placeholder="Ask about SHILPKAR..."
              disabled={loading}
            />


            <button
              onClick={() => sendMessage()}
              disabled={
                loading ||
                !input.trim()
              }
              className="shilpkar-send-button"
              aria-label="Send message"
            >
              ↑
            </button>

          </div>


          {/* FOOTER */}

          <div className="shilpkar-chatbot-footer">
            SHILPKAR • Living Elevated
          </div>

        </div>

      )}

    </>
  );
}