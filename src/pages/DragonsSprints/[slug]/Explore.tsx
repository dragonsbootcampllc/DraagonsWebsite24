import { useRouter } from 'next/router';
import { useUser } from '@clerk/nextjs';
import { useState, useEffect } from 'react';

export default function ExplorePage() {
  const router = useRouter();
  const { slug } = router.query;
  const { user, isLoaded } = useUser();
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    if (isLoaded && user) {
      const userCourses = user.publicMetadata.courses as string[] || [];
      setHasAccess(userCourses.includes(slug as string));
    }
  }, [isLoaded, user, slug]);

  if (!isLoaded) return <div>Loading...</div>;

  if (!hasAccess) {
    return <div>You don't have access to this course.</div>;
  }

  return (
    <div>
      <h1>Explore {slug}</h1>
      {/* Add your course materials here */}
    </div>
  );
}