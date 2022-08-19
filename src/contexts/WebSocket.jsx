/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useRef } from "react";
import io from "socket.io-client";

export const WebSocketContext = createContext(undefined);

export default function WebSocketProvider({ children }) {
  const socketRef = useRef(undefined);

  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = io(import.meta.env.VITE_BASE_URL);
    }
  }, []);

  return (
    <WebSocketContext.Provider value={{ socket: socketRef.current }}>
      {children}
    </WebSocketContext.Provider>
  );
}
