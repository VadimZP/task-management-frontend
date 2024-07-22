"use client"

import axios from "axios"

export default function SignIn() {
    const signIn = async () => {
        const result = await axios.post("http://localhost:8000/sign-in", {
            email: "wesborlandzp@gmail.com",
            password: "1234Root"
        }, {
            withCredentials: true
        })

    }

    const signOut = async () => {
        const result = await axios.post("http://localhost:8000/sign-out", {
            email: "wesborlandzp@gmail.com",
            password: "1234Root"
        }, {
            withCredentials: true
        })

    }

    return (
        <>
            <button onClick={signIn}>Sign In</button>
            <button onClick={signOut}>Sign Out</button>
        </>
    )
}