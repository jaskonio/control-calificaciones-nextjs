declare module "next-auth" {
    interface Session {
        user: {
            id: string,
            role: string,
        } & DefaultSession
    }

    interface User extends User {
        id: string,
        role: string,
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        id: string,
        role: string,
    }
}

declare module "@auth/core/types" {
    interface User {
        id: string,
        role: string,
    }
}