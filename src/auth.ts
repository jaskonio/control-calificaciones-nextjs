import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        credentials: {
          username: {},
          password: {},
        },
        authorize: async (credentials) => {
            console.log('authorize')
            console.log(credentials)

            if (credentials.username == "jonatan") {
                return {
                    id: '1', 
                    // name: credentials.username,
                    username: credentials.username, 
                    password: credentials.password
                }
            }
            
            throw new Error("Invalid user")
        },
      }),
  ],
})