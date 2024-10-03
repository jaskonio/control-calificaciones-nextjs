import { auth } from "@/auth"
import { NextResponse } from "next/server"

const protectedRoutes = ["/admin", "/admin/:path*"]
const publicRoutes = ['/login', '/']


function isAuthenticate(session: any) {
    if (!session) return false
    
    if (session.user?.name != '') return true

    return false
}

export default auth(async (req) => {
    // 2. Check if the current route is protected or public
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)
    const session = await auth()
    const isAuth = isAuthenticate(session)

    if (isProtectedRoute && !isAuth) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    // 5. Redirect to /admin if the user is authenticated
    if ( isPublicRoute && isAuth && !req.nextUrl.pathname.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/admin', req.nextUrl))
    }

    return NextResponse.next()
})
