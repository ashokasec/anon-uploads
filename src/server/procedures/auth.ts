import { createServerActionProcedure } from "zsa";
import { auth } from "@/server/auth";

export const authenticatedAction = createServerActionProcedure()
    .handler(async () => {
        const session = await auth();
        if (!session) throw new Error("User not authenticated");
        return session;
    });