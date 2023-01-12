import { useState, useEffect } from "react";
import { useUser } from "../contexts/userContext";
import "./Chat.css";

function Chat({ socket, username, room }) {
  const [currentMsg, setCurrentMsg] = useState();
  const [msgs, setMsgs] = useState([]);
  const [typing, setTyping] = useState(false);
  const [typingDisplay, setTypingDisplay] = useState("");
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    socket.emit("typing", { typing, user: username });
  }, [typing]);
  const sendMsg = async () => {
    if (currentMsg !== "") {
      const msgData = {
        room,
        username,
        message: currentMsg,
        time: `${new Date(Date.now()).getHours()}:${new Date(
          Date.now()
        ).getMinutes()}`,
      };

      // eslint-disable-next-line react/prop-types
      await socket.emit("send_msg", msgData);
      setMsgs((list) => [...list, msgData]);
    }
    setCurrentMsg("");
    setTyping(false);
  };
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    socket.on("receive_msg", (data) => {
      setMsgs((list) => [...list, data]);
    });

    // eslint-disable-next-line react/prop-types
    socket.on("display", (data) => {
      if (data.typing === true && data.user !== username) {
        setTypingDisplay("User is typing...");
      } else {
        setTypingDisplay("");
      }
    });
  }, [socket]);
  return (
    <div className="chat__content">
      <div className="chat__header">
        <p>AMAZON</p>
      </div>
      <div className="chat__body">
        {msgs &&
          msgs.map((el) => {
            return (
              <div
                className="message"
                id={username === el.username ? "me" : "other"}
              >
                <div className="message__container">
                  <div className="message__content">
                    <p>{el.message}</p>
                  </div>
                </div>
                <div className="message__meta">
                  <p>{el.time}&nbsp;{el.username}</p>
                </div>
              </div>
            );
          })}
          <p>{typingDisplay}</p>
      </div>
      <div className="chat__footer">
        <input
          className="message__input"
          type="text"
          placeholder="Message"
          onChange={(event) => setCurrentMsg(event.target.value)}
          value={currentMsg}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              sendMsg();
            } else {
              setTyping(true);
            }
          }}
        />
        <div onClick={sendMsg} className="send__button" />
      </div>
    </div>
  );
}

export default Chat;
