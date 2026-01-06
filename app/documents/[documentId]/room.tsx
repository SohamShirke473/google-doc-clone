"use client";

import { ReactNode } from "react";
import {
    LiveblocksProvider,
    RoomProvider,
    ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";

export function Room({ children }: { children: ReactNode }) {
    const param = useParams();
    return (
        <LiveblocksProvider publicApiKey={"pk_dev_R1eqbn8gSEM-O7V9hZ24eTHz2lxXEryNxtpleNdH0vaCM5mEMvsBOxX-IAqY7A3b"}>
            <RoomProvider id={param.documentId as string}>
                <ClientSideSuspense fallback={<div>Loading…</div>}>
                    {children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    );
}