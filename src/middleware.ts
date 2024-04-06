import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: [
    "/",
    "/sign-in",
    "/courses",
    "/testing",
    "/levels",
    "/lesson",
    "lesson/1",
    "/api/xataData",
    "/admin",
  ],
  ignoredRoutes: ["/((?!api|trpc))(_next.*|.+.[w]+$)", "/api/Lessons"],
});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
