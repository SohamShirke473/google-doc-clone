// Define Liveblocks types for your application
// https://liveblocks.io/docs/api-reference/liveblocks-react#Typing-your-data
declare global {
  interface Liveblocks {
    // Each user's Presence, for useMyPresence, useOthers, etc.
    Presence: Record<string, never>;
    Storage: {
      // Example, a conflict-free list
      // animals: LiveList<string>;
      leftMargin: number;
      rightMargin: number;
    };

    // Custom user info set when authenticating with a secret key
    UserMeta: {
      id: string;
      info: {
        // Example properties, for useSelf, useUser, useOthers, etc.
        name: string;
        avatar: string;
        color: string;
      };
    };

    // Custom events, for useBroadcastEvent, useEventListener
    RoomEvent: Record<string, never>;
    // Example has two events, using a union
    // | { type: "PLAY" } 
    // | { type: "REACTION"; emoji: "🔥" };

    // Custom metadata set on threads, for useThreads, useCreateThread, etc.
    ThreadMetadata: Record<string, never>;
    // Example, attaching coordinates to a thread
    // x: number;
    // y: number;

    // Custom room info set with resolveRoomsInfo, for useRoomInfo
    RoomInfo: {
      id: string;
      name: string;
    };
  }
}

export { };
