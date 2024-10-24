import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { userService } from "./services"
import { JWT } from "next-auth/jwt"
import { User } from "@auth/core/types"


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
    jwt({ token, user }: {token: JWT, user: User}) {
      if(user) token.role = user.role
      return token
    },
    session({ session, token }) {
      session.user.role = token.role
      return session
    }
  }
})