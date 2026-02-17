import { env } from "@/env";
import { cookies } from "next/headers";

export const authService = {
  getSession: async () => {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${env.SERVER_AUTH_URL}/get-session`, {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });
      const session = await res.json();
      if (!session) {
        return { data: null, error: { message: "Session is missing." } };
      }
      return { data: session, error: null };
    } catch (error) {
      return {
        data: null,
        error: { message: "Something went wrong, try again." },
      };
    }
  },
};
