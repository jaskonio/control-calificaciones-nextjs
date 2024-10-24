import { auth } from "@/auth"
import { NextResponse } from "next/server"
import { hasAccess } from "./routes"

function isAuthenticate(session: any) {
    if (!session) return false

    if (session.user?.name != '') return true

    return false
}

export default auth(async (req) => {
    const path: string = req.nextUrl.pathname
    const session = await auth()
    const isAuth = isAuthenticate(session)

    if (path == '/'
        || !(req.nextUrl.pathname.startsWith('/admin')
            || req.nextUrl.pathname.startsWith('/login')
            || req.nextUrl.pathname.startsWith('/settings'))) {
        return NextResponse.next()
    }

    if (path == '/login' && isAuth) return NextResponse.redirect(new URL('/', req.nextUrl))
    if (path == '/login' && !isAuth) return NextResponse.next()

    if (!isAuth && req.nextUrl.pathname.startsWith('/admin')) return NextResponse.redirect(new URL('/login', req.nextUrl))
    if (!isAuth && !req.nextUrl.pathname.startsWith('/admin')) return NextResponse.redirect(new URL('/admin', req.nextUrl))

    const containRoleToAccess = hasAccess(session.user.role, '/' + path.split('/')[1])

    if (isAuth && !containRoleToAccess) return NextResponse.redirect(new URL('/login', req.nextUrl))

    return NextResponse.next()
})
