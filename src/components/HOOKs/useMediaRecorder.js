import { useState, useEffect } from "react";

const useMediaRecorder = () => {
  const [stream, setStream] = useState(null);
  const [recorder, setRecorder] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [chunks, setChunks] = useState([]);

  useEffect(() => {
    const init = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setStream(stream);
      setRecorder(new MediaRecorder(stream));
    };
    init();
  }, []);

  const startRecording = () => {
    if (recorder && !isRecording) {
      setChunks([]);
      recorder.start();
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (recorder && isRecording) {
      recorder.stop();
      setIsRecording(false);
    }
  };

  const handleDataAvailable = (event) => {
    setChunks([...chunks, event.data]);
  };

  const getRecording = () => {
    if (chunks.length) {
      const blob = new Blob(chunks, { type: chunks[0].type });
      return URL.createObjectURL(blob);
    }
    return null;
  };

  return {
    stream,
    isRecording,
    startRecording,
    stopRecording,
    getRecording,
  };
};

export default useMediaRecorder;
