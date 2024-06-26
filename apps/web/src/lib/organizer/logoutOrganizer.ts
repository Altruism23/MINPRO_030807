'use server'
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const removeCookie = (session: any) => {
    try {
        cookies().delete({
            name: session,
            httpOnly: true,
            path: '/'
        })    
    } catch (error) {
        console.log(error)
    }
    redirect('/')
}