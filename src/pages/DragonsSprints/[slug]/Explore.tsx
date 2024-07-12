import { useRouter } from "next/router";
import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import CardNavOptions from "@/pages/DragonsSprints/[slug]/Components/cards";
import CheckoutButton from "@/components/CheckoutButton";

interface StreakInfo {
  currentStreak: number;
  longestStreak: number;
  lastSignIn: string;
}

const StreakVisualizer = ({
  daysLeft,
  userImageUrl = "",
}: {
  daysLeft: number;
  userImageUrl?: string;
}) => {
  const totalDays = 14;
  const completedDays = totalDays - daysLeft;
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className='flex items-center justify-center space-x-4 my-4'>
      <img src={userImageUrl} alt='User' className='w-10 h-10 rounded-full' />
      <div className='flex space-x-1'>
        {[...Array(totalDays)].map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-sm ${
              index < completedDays ? "bg-green-500" : "bg-gray-300"
            }`}
            title={`Day ${index + 1}`}></div>
        ))}
      </div>
      <svg
        width='40'
        height='40'
        viewBox='0 0 40 40'
        className={`transform ${animate ? "scale-110" : "scale-100"} transition-transform duration-500`}>
        <defs>
          <clipPath id='circle-clip'>
            <circle cx='20' cy='20' r='20' />
          </clipPath>
        </defs>
        <image
          href={userImageUrl}
          width='40'
          height='40'
          clipPath='url(#circle-clip)'
        />
        <circle
          cx='20'
          cy='20'
          r='19'
          fill='none'
          stroke='gold'
          strokeWidth='2'
          className={`${animate ? "animate-pulse" : ""}`}
        />
      </svg>
    </div>
  );
};

export default function ExplorePage() {
  const router = useRouter();
  const { slug } = router.query;
  const { user, isLoaded } = useUser();
  const [hasAccess, setHasAccess] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [daysLeft, setDaysLeft] = useState(14);
  const [missedDays, setMissedDays] = useState(0);
  const [streakInfo, setStreakInfo] = useState<StreakInfo>({
    currentStreak: 0,
    longestStreak: 0,
    lastSignIn: "",
  });

  useEffect(() => {
    if (!isLoaded || !user || !slug) return;

    const userCourses = (user.publicMetadata.courses as string[]) || [];
    setHasAccess(userCourses.includes(slug as string));

    const today = new Date();
    const todayString = today.toISOString().split("T")[0];

    // General sign-in streak
    const storedStreakInfo = localStorage.getItem(`${user.id}_streakInfo`);
    let currentStreakInfo: StreakInfo = storedStreakInfo
      ? JSON.parse(storedStreakInfo)
      : { currentStreak: 0, longestStreak: 0, lastSignIn: "" };

    if (currentStreakInfo.lastSignIn !== todayString) {
      if (isConsecutiveDay(currentStreakInfo.lastSignIn, todayString)) {
        currentStreakInfo.currentStreak++;
        currentStreakInfo.longestStreak = Math.max(
          currentStreakInfo.longestStreak,
          currentStreakInfo.currentStreak
        );
      } else {
        currentStreakInfo.currentStreak = 1;
      }
      currentStreakInfo.lastSignIn = todayString;
      localStorage.setItem(
        `${user.id}_streakInfo`,
        JSON.stringify(currentStreakInfo)
      );
    }
    setStreakInfo(currentStreakInfo);

    // 14-day challenge tracking
    const savedStartDate = localStorage.getItem(`${slug}_startDate`);
    if (savedStartDate) {
      setStartDate(new Date(savedStartDate));
    } else {
      const newStartDate = new Date();
      setStartDate(newStartDate);
      localStorage.setItem(`${slug}_startDate`, newStartDate.toISOString());
    }

    const lastVisit = localStorage.getItem(`${slug}_lastVisit`);
    if (lastVisit) {
      const daysSinceLastVisit = Math.floor(
        (today.getTime() - new Date(lastVisit).getTime()) /
          (1000 * 60 * 60 * 24)
      );
      if (daysSinceLastVisit > 1) {
        setMissedDays((prev) => prev + daysSinceLastVisit - 1);
      }
    }
    localStorage.setItem(`${slug}_lastVisit`, today.toISOString());

    // Update days left
    if (startDate) {
      const elapsedDays = Math.floor(
        (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      setDaysLeft(Math.max(0, 14 - elapsedDays));
    }
  }, [isLoaded, user, slug, startDate]);

  const isConsecutiveDay = (lastDate: string, currentDate: string) => {
    const last = new Date(lastDate);
    const current = new Date(currentDate);
    const diffTime = Math.abs(current.getTime() - last.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays === 1;
  };

  const getMotivationSentence = () => {
    const motivationSentences = [
      "Every lesson learned brings you closer to mastery.",
      "Commitment today leads to expertise tomorrow.",
      "Your persistence in learning tech will define your success.",
      "Embrace challenges as opportunities to grow.",
      "Each concept mastered is a step toward achievement.",
      "Stay focused; the finish line is within reach.",
      "Your dedication now sets the stage for future triumphs.",
      "Celebrate progress, no matter how small.",
      "Believe in your ability to conquer each module.",
      "Seek knowledge eagerly; it's the key to transformation.",
      "Inspire others with your dedication and drive.",
      "Visualize your goals; they are closer than you think.",
      "Stay motivated; your determination will pay off.",
      "Finish strong; your tech journey is just beginning.",
    ];

    return motivationSentences[
      new Date().getDay() % motivationSentences.length
    ];
  };

  const resetChallenge = () => {
    const newStartDate = new Date();
    setStartDate(newStartDate);
    setDaysLeft(14);
    setMissedDays(0);
    localStorage.setItem(`${slug}_startDate`, newStartDate.toISOString());
    localStorage.setItem(`${slug}_lastVisit`, newStartDate.toISOString());
  };

  if (!isLoaded || !slug) {
    return (
      <div
        id='global-bg'
        className='hero relative min-h-[700px] md:min-h-[calc(100vh-12rem)]'>
        <div className='container mx-auto pt-[120px] md:pt-[140px] flex flex-col justify-between gap-9 items-center px-4'>
          <div className='content flex flex-col gap-12'>
            <h1 className='md:text-2xl grid place-items-center text-xl md:text-center text-start font-medium text-gray-50/70 capitalize'>
              Loading...
            </h1>
          </div>
        </div>
      </div>
    );
  }

  if (!hasAccess) {
    return (
      <div
        id='global-bg'
        className='hero relative min-h-[700px] md:min-h-[calc(100vh-12rem)]'>
        <div className='container mx-auto pt-[120px] md:pt-[140px] flex flex-col justify-between gap-9 items-center px-4'>
          <div className='content flex flex-col gap-12'>
            <div
              style={{ fontFamily: "interV" }}
              className='text-3xl md:text-6xl capitalize content-center max-w-4xl text-center z-10 flex justify-center m-auto relative mb-3 text-gray-200 font-semibold'>
              Hi {user?.firstName}! You don't have access to this course yet 🚧
            </div>
            <h1 className='md:text-2xl grid place-items-center text-xl md:text-center text-start font-medium text-gray-50/70 capitalize'>
              To gain access, please purchase the course or contact support.
            </h1>
            <CheckoutButton
              CTAtext='Buy Now'
              className='!h-fit'
              createCheckoutSession='/api/Checkout-DragonsSprint'
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      id='global-bg'
      className='hero relative min-h-[700px] md:min-h-[calc(100vh-12rem)]'>
      <div className='container mx-auto pt-[120px] md:pt-[140px] flex flex-col justify-between gap-9 items-center px-4'>
        <div className='content flex flex-col gap-12'>
          <div>
            <StreakVisualizer
              userImageUrl={user?.imageUrl}
              daysLeft={daysLeft}
            />

            <p
              style={{ fontFamily: "interV" }}
              className='text-white/50 text-lg md:text-base container mx-auto flex flex-col gap-7 justify-center text-center max-w-[800px] pt-5'>
              {daysLeft > 0
                ? `You have ${daysLeft} days left in your challenge. Keep going!`
                : "Congratulations! You've completed the 14-day challenge!"}
            </p>

            <div
              style={{ fontFamily: "interV" }}
              className='text-3xl md:text-6xl content-center max-w-4xl text-center z-10 flex justify-center m-auto relative mb-3 text-gray-200 font-semibold'>
              Hi {user?.firstName}! Welcome to Your 14-Day Challenge
            </div>

            <p className='text-green-400 text-lg md:text-base text-center pt-3'>
              Current Streak: {streakInfo.currentStreak} days | Longest Streak:{" "}
              {streakInfo.longestStreak} days
            </p>

            <div className='mb-6 p-2 flex justify-center'>
              <div>
                <h1 className='md:text-2xl grid place-items-center text-xl md:text-center text-start font-medium text-gray-50/70 capitalize'>
                  {getMotivationSentence()}
                </h1>
              </div>
            </div>

            {missedDays > 0 && (
              <p className='text-yellow-400 text-lg md:text-base text-center pt-3'>
                You've missed {missedDays} day(s) in the challenge. Stay
                consistent to maximize your learning! 🚀
              </p>
            )}

            {missedDays >= 3 && (
              <button
                onClick={resetChallenge}
                className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Restart Challenge 🔄
              </button>
            )}
          </div>
        </div>
      </div>
      <CardNavOptions />
    </div>
  );
}