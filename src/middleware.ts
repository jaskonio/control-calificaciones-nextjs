import { auth } from "@/auth"
import { NextResponse } from "next/server"

const protectedRoutes = ["/admin"]
const publicRoutes = ['/login', '/']


function isAuthenticate(session: any) {
    if (!session) return false
    
    if (session.user?.name != '') return true

    return false
}

export default auth(async (req) => {
    const path = req.nextUrl.pathname
    let isProtectedRoute = false 
    protectedRoutes.map((pr => {
        if (path.startsWith(pr)) {
            isProtectedRoute = true
        }
    }))

    const isPublicRoute = publicRoutes.includes(path)
    const session = await auth()
    const isAuth = isAuthenticate(session)

    if (isProtectedRoute && !isAuth) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    if ( isPublicRoute && isAuth && !req.nextUrl.pathname.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/admin', req.nextUrl))
    }

    return NextResponse.next()
})
