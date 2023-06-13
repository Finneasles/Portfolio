// import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
// import NextAuth, { NextAuthOptions } from "next-auth";
// import clientPromise from "@/utils/db";
// import jwt from "jsonwebtoken";

// const authOptions: NextAuthOptions = {
//   providers: [,
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
//   adapter: MongoDBAdapter(),
//   callbacks: {
//     async session({ session, token, user }) {
//       return {
//         ...session,
//         isNewUser: token.isNewUser,
//         token: signToken({ token }),
//       };
//     },
//     async jwt({ token, user, account, isNewUser }) {
//       if (account && user) {
//         token.access_token = account.access_token;
//         if (isNewUser) token.isNewUser = isNewUser;
//       }
//       return token;
//     },
//   },
//   session: {
//     strategy: "jwt" as const,
//   },
// };

// const signToken = ({ token }) => {
//   return jwt.sign(token, process.env.NEXTAUTH_SECRET);
// };

export {};
