import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface LessonStore {
  completedBlogs: Record<string, string[]>; // Track completed blogs by category
  markBlogAsComplete: (category: string, blog: string) => void;
  getCompletedBlogs: (category: string) => string[];
}

const useLessonStore = create<LessonStore>()(
  persist(
    (set, get) => ({
      completedBlogs: {},

      markBlogAsComplete: (category, blog) => {
        set((state) => {
          const updatedBlogs = { ...state.completedBlogs };
          if (!updatedBlogs[category]) {
            updatedBlogs[category] = [];
          }
          if (!updatedBlogs[category].includes(blog)) {
            updatedBlogs[category].push(blog);
          }
          return { completedBlogs: updatedBlogs };
        });
      },

      getCompletedBlogs: (category) => {
        return get().completedBlogs[category] || [];
      },
    }),
    {
      name: 'lesson-storage', // اسم المفتاح الذي سيتم استخدامه في localStorage
      storage: createJSONStorage(() => localStorage), // استخدام createJSONStorage
    }
  )
);

export default useLessonStore;
