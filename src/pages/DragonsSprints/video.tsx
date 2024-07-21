import React, { useEffect, useState, useCallback } from "react";
import { useUser, SignedIn, SignedOut, useClerk } from "@clerk/nextjs";
import Video from "@/components/LiveVideo/Video";
import VideoInfo from "@/components/LiveVideo/VideoInfo";
import Transcription from "@/components/LiveVideo/Transcription";
import Comments from "@/components/LiveVideo/Comments";
import ViewerCount from "@/components/LiveVideo/ViewerCount";
import Gamification from "@/components/LiveVideo/Gamification";
import { useWebSocket } from "./useWebSocket";
import DragonsImage from "@/../public/Identity/Images/2023/sd.png";
import Image from "next/image";
import { useRouter } from 'next/router';

interface UserMetadata {
  courses?: string[];
}

const LiveVideo: React.FC = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const clerk = useClerk();
  const router = useRouter();
  const [socketUrl, setSocketUrl] = useState<string>("");
  const [hasAccess, setHasAccess] = useState<boolean>(false);

  const checkAccess = useCallback(() => {
    if (user) {
      const userMetadata = user.publicMetadata as UserMetadata;
      const hasAccessToLiveStream = userMetadata.courses?.includes("CareerSprintLive") || false;
      setHasAccess(hasAccessToLiveStream);
      if (hasAccessToLiveStream && typeof window !== "undefined") {
        setSocketUrl(`wss://${window.location.host}/ws`);
      }
    }
  }, [user]);

  useEffect(() => {
    checkAccess();
  }, [checkAccess]);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      clerk.openSignIn({
        redirectUrl: router.asPath,
      });
    }
  }, [isLoaded, isSignedIn, clerk, router.asPath]);

  const { socket, isConnected, sendMessage, addListener, removeListener } = useWebSocket(socketUrl);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div>Redirecting to sign in...</div>;
  }

  if (!hasAccess) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
          <p>You do not have access to this live stream.</p>
          <p>Please contact support if you believe this is an error.</p>
        </div>
      </div>
    );
  }

  return (
    <div className='flex justify-center'>
      <div className='flex max-xl:flex-col max-w-[1400px] justify-center'>
        <div className='md:w-[900px]'>
          <div className='bg-purple-800/20 my-5 rounded-3xl'>
            <Video link='https://www.youtube.com/embed/1y_kfWUCFDQ' />
          </div>
          <ViewerCount socket={socket! as WebSocket} />
          <VideoInfo
            imgUrl={DragonsImage.src}
            Title='Master Development with Our Dragons Bootcamp'
            Hash='Frontend'
          />
                    <Gamification  socket={socket! as WebSocket} />

          <Transcription Text='Lorem ipsum dolor sit, amet consectetur adipisicing elit...' />
        </div>
        <div className="w-full md:w-1/4 p-4">
          <Comments comments={[]} 
          socket={socket! as WebSocket}
          />
        </div>
        
      </div>
    </div>
  );
};

export default LiveVideo;