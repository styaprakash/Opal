"use server"

import { currentUser } from "@clerk/nextjs/server"
export const onAuthenticationUser = async () => {
    try{
        const user = await currentUser()
        if(!user){
            return { status: 403 };
        }

        
        const userExist = await client.user.findUnique({
            where: {
                clerkid: user.id,
            },
            include: {
                workspace: {
                    where: {
                        User: {
                            clerkid: user.id
                        },
                    }
                }
            }
        })
        if(!userExist){
            return { status: 200, user: userExist};
        }
    }catch(error){}
}