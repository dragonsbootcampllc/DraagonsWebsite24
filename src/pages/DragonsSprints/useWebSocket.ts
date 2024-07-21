import { useState, useEffect, useCallback, useRef } from 'react';

type WebSocketHook = {
  socket: WebSocket | null;
  isConnected: boolean;
  sendMessage: (message: any) => void;
  addListener: (eventName: string, callback: (event: any) => void) => void;
  removeListener: (eventName: string, callback: (event: any) => void) => void;
};

export const useWebSocket = (url: string): WebSocketHook => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout>();

  const connect = useCallback(() => {
    const ws = new WebSocket(url);

    ws.onopen = () => {
      setIsConnected(true);
      console.log('WebSocket connected');
    };

    ws.onclose = () => {
      setIsConnected(false);
      console.log('WebSocket disconnected. Trying to reconnect...');
      reconnectTimeoutRef.current = setTimeout(connect, 3000);
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    setSocket(ws);
  }, [url]);

  useEffect(() => {
    connect();

    return () => {
      if (socket) {
        socket.close();
      }
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
    };
  }, [connect]);

  const sendMessage = useCallback((message: any) => {
    if (socket && isConnected) {
      socket.send(JSON.stringify(message));
    } else {
      console.warn('WebSocket is not connected. Message not sent.');
    }
  }, [socket, isConnected]);

  const addListener = useCallback((eventName: string, callback: (event: any) => void) => {
    if (socket) {
      socket.addEventListener(eventName, callback);
    }
  }, [socket]);

  const removeListener = useCallback((eventName: string, callback: (event: any) => void) => {
    if (socket) {
      socket.removeEventListener(eventName, callback);
    }
  }, [socket]);

  return { socket, isConnected, sendMessage, addListener, removeListener };
};