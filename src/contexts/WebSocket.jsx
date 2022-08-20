/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";

import { updateChatLog } from "~/store/actions/chatActions";

export const WebSocketContext = createContext(undefined);

export default function WebSocketProvider({ children }) {
  const socketRef = useRef(undefined);
  const dispatch = useDispatch();
  const {
    data: { roomId },
  } = useSelector((state) => state.chat);

  const sendMessage = (message) => {
    socketRef.current.emit(roomId, message);

    dispatch(updateChatLog(roomId, message));
  };

  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = io(import.meta.env.VITE_BASE_URL);
    }
  }, []);

  const value = {
    socket: socketRef.current,
    sendMessage,
  };

  return (
    <WebSocketContext.Provider value={value}>
      {children}
    </WebSocketContext.Provider>
  );
}
