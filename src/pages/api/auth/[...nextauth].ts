import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import Providers from "next-auth/providers";

const options: NextAuthOptions = {
  theme: {
    colorScheme: "light"
  },
  debug: true,
  session: {},
  jwt: {},
  providers: [],
}

export default NextAuth(options);