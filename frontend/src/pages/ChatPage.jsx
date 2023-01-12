import io from "socket.io-client";
import { useState, useEffect } from "react";
import Chat from "@components/Chat";
import { useUser } from "../contexts/userContext";
import { useChat } from "../contexts/chatContext";

const socket = io.connect("http://192.168.1.94:8000");

function ChatPage() {
  const [username, setUsername] = useState("");
  const { userInfo } = useUser();
  const { showChat } = useChat();
  const [room, setRoom] = useState("1");
  const joinChat = () => {
    // if (username !== "" && room !== "") {
    socket.emit("join_room", room);
    // }
    // setShowChat(true);
  };
  useEffect(() => {
    setUsername(userInfo.firstname || userInfo.name_company);
    joinChat();
  }, []);
  return (
    <div className="chat__page">
      {/* <h2>Join the chat</h2>
      <input
        type="text"
        placeholder="Name..."
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="text"
        placeholder="Room id"
        onChange={(event) => setRoom(event.target.value)}
      />
      <button onClick={joinChat}>Join</button> */}
      <Chat socket={socket} username={username} room={room} />
    </div>
  );
}

export default ChatPage;
