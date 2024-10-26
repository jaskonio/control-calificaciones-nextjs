import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { userService } from "./services"


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const user = await userService.getByEmailAndPasword(credentials.email as string, credentials.password as string)

        if (user == null) {
          throw new Error("Invalid user")
        }

        return {
          id: user.id.toString(),
          name: user.name,
          email: user.email,
          role: user.role
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt({ session, token }) {
      if (session.user) {
        token.id = session.user.role
        token.role = session.user.role
      }
      return token
    },
    session({ session, token }) {
      session.user.id = token.id
      session.user.role = token.role

      return session
    }
  }
})