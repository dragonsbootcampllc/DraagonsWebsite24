import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';

interface UserScore {
  userId: string;
  name: string;
  points: number;
  badges: string[];
}

interface GamificationProps {
  socket: WebSocket;
}

const Gamification: React.FC<GamificationProps> = ({ socket }) => {
  const [userScores, setUserScores] = useState<UserScore[]>([]);
  const { user } = useUser();

  useEffect(() => {
    socket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'updateScores') {
        setUserScores(data.scores);
      }
    });

    return () => {
      socket.removeEventListener('message', () => {});
    };
  }, [socket]);

  const getCurrentUserScore = () => {
    return userScores.find((score) => score.userId === user?.id) || {
      userId: user?.id || '',
      name: user?.fullName || '',
      points: 0,
      badges: [],
    };
  };

  const renderBadges = (badges: string[]) => {
    return badges.map((badge, index) => (
      <span key={index} className="inline-block bg-blue-500 text-white rounded-full px-2 py-1 text-xs mr-1">
        {badge}
      </span>
    ));
  };

  return (
    <div className="bg-purple-800/20 rounded-lg shadow p-4">
      <h2 className="text-xl font-bold mb-4">Gamification</h2>
      <div className="mb-4">
        <h3 className="font-semibold">Your Stats</h3>
        <p>Points: {getCurrentUserScore().points}</p>
        <div>Badges: {renderBadges(getCurrentUserScore().badges)}</div>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Leaderboard</h3>
        <ul>
          {userScores
            .sort((a, b) => b.points - a.points)
            .slice(0, 5)
            .map((score, index) => (
              <li key={score.userId} className="flex items-center justify-between mb-2">
                <span>{index + 1}. {score.name}</span>
                <span>{score.points} points</span>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Gamification;