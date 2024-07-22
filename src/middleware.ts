import axios from 'axios';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const test = request.cookies.get('connect.sid')
    const cookieResponse = await axios.get("http://localhost:8000/session", {
        headers: {
            "Cookie": `${test?.name}=${test?.value};`
        }
    })

    console.log("sdsadasasddasdsadsadsadssaddsasasaddsas", cookieResponse.data)

    // return NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }