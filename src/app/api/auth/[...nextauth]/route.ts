import db from "@/lib/db";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
  

export const authOptions:AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password", placeholder: "*****" },
            },
            async authorize(credentials, _req) {
                try {
                    console.log(credentials);

                    if (credentials == undefined) throw new Error('No user found')

                    const userFound = await db.teacher.findFirst({
                        where: {
                            username: credentials.username
                        }
                    });

                    if (!userFound) throw new Error('Username or password is invalid');

                    const matchPassword = userFound.password == credentials?.password;

                    if (!matchPassword) throw new Error('Username or password is invalid');

                    return {
                        id: userFound.id,
                        username: userFound.username,
                    }
                } catch (error) {
                    throw error;
                }
            },
        })
    ],
    pages: {
        signIn: "/auth/login",
    }
}
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };