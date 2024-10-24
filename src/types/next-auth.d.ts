declare module "next-auth" {
    interface Session {
        user: {
            role: string,
        } & DefaultSession
    }

    interface User extends User {
        role: string,
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        role: string,
    }
}

declare module "@auth/core/types" {
    interface User {
        role: string,
    }
}