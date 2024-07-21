import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
interface ViewerCountProps {
  socket: WebSocket;
}

const ViewerCount: React.FC<ViewerCountProps> = ({ socket }) => {
  const [viewerCount, setViewerCount] = useState(30);
  const { user } = useUser();

  useEffect(() => {
    socket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "viewerCount") {
        setViewerCount(data.count);
      }
    });

    return () => {
      socket.removeEventListener("message", () => {});
    };
  }, [socket]);

  return (
    <div className='flex items-center space-x-2'>
      <img
        src={typeof user?.setProfileImage === 'function' ? "" : user?.setProfileImage}
        alt={user?.fullName ?? "User"}
        className='w-8 h-8 rounded-full'
      />
      <span>{user?.fullName}</span>
      <span>Viewers: {viewerCount}</span>
    </div>
  );
};

export default ViewerCount;
