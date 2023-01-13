import io from "socket.io-client";
import { useState, useEffect } from "react";
import Chat from "@components/Chat";
import { useUser } from "../contexts/userContext";
import { useChat } from "../contexts/chatContext";
import Header from "@components/Header";

const socket = io.connect("http://192.168.1.30:8000");

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
  }, [userInfo]);
  return (
    <div className="chat__page">
      <Header value="Ask us a question" />
      {username && <Chat socket={socket} username={username} room={room} />}
    </div>
  );
}

export default ChatPage;
