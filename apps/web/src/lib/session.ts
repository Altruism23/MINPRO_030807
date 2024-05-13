import { cookies } from "next/headers";
import {verify} from 'jsonwebtoken'

export async function getSession() {
    console.log("ADA BRO")

    const session = cookies().get("session")?.value
    if (!session) {
        return null
    } else {
        return await decrypt(session)
    }
}


export async function decrypt(input: string): Promise<any> {
    const payload = verify(input, process.env.KEY_JWT!)
    console.log(payload)
    return payload
}
