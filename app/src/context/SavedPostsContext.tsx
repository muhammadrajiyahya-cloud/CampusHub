import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type Post = {
  id: number;
  title: string;
  description: string;
  time: string;
  likes: number;
};

type SavedPostsContextType = {
  savedPosts: Post[];
  toggleSavedPost: (post: Post) => void;
  isSaved: (id: number) => boolean;
};

const SavedPostsContext =
  createContext<SavedPostsContextType | undefined>(
    undefined
  );

export function SavedPostsProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [savedPosts, setSavedPosts] = useState<Post[]>([]);

  const toggleSavedPost = (post: Post) => {

    const alreadySaved = savedPosts.some(
      (item) => item.id === post.id
    );

    if (alreadySaved) {

      setSavedPosts(
        savedPosts.filter(
          (item) => item.id !== post.id
        )
      );

    } else {

      setSavedPosts([
        ...savedPosts,
        post,
      ]);

    }
  };


  const isSaved = (id: number) => {

    return savedPosts.some(
      (post) => post.id === id
    );

  };


  return (
    <SavedPostsContext.Provider
      value={{
        savedPosts,
        toggleSavedPost,
        isSaved,
      }}
    >
      {children}
    </SavedPostsContext.Provider>
  );
}


export function useSavedPosts() {

  const context =
    useContext(SavedPostsContext);

  if (!context) {
    throw new Error(
      "useSavedPosts must be used inside SavedPostsProvider"
    );
  }

  return context;
}