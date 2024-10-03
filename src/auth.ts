import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { userRepository } from "./repositories"


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
        credentials: {
          username: {},
          password: {},
        },
        authorize: async (credentials) => {
          const userEntities = await userRepository.getAll()
          const user = await userEntities.find(e => e.name == credentials.username)

          if (!user) {
            return null
          }

          if (user.password == credentials.password) {
              return {
                  id: user.user_id.toString(), 
                  name: user.name,
                  email: user.email
              }
          }

          throw new Error("Invalid user")
        },
      }),
  ],
})