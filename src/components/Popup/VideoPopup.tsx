import { useEffect, useState, ReactNode } from "react";

interface VideoPopupProps {
    clear: () => void;
    videoComponent: ReactNode;
}

export default function VideoPopup({ clear, videoComponent }: VideoPopupProps) {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(true);

        return () => {
            setIsActive(false);
        };
    }, []);

    const handleClose = () => {
        setIsActive(false);
        setTimeout(clear, 300);
    };

    return (
        <div className={`w-full h-screen fixed z-[9999999999] left-0 flex justify-center items-center top-0 transition-all duration-300 bg-blue-1/40 backdrop-blur-lg ${isActive ? "opacity-100" : "opacity-0"}`}>
            <div className={`aspect-video relative w-3/5 max-[1000px]:w-[90%] max-w-[1400px] bg-blue-1 rounded-3xl transition-all duration-300 ${isActive ? "scale-100" : "scale-0"}`}>
                {videoComponent}

                <button onClick={handleClose} className={`absolute active:scale-95 right-0 top-0 -translate-y-12 w-10 aspect-square z-50 group rounded-full bg-blue-1/50 hover:bg-blue-1/70 transition-all duration-500`} style={{ zIndex: 999 }}>
                    <span className={`bg-white h-[3px] w-[70%] rounded-full inline-block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all group-hover:rotate-45`} style={{ zIndex: 1 }} />
                    <span className={`bg-white h-[3px] w-[70%] rounded-full inline-block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all group-hover:-rotate-45`} style={{ zIndex: 1 }} />
                </button>
            </div>
        </div>
    );
}
