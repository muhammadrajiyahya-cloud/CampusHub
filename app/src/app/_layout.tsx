import { Stack } from "expo-router";

import {
  SavedPostsProvider,
} from "../context/SavedPostsContext";

export default function RootLayout() {
  return (
    <SavedPostsProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SavedPostsProvider>
  );
}