import { onAuthenticationUser } from '@/actions/user'
import { verifyAccessToWorkspace } from '@/actions/workspace'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
    params: {workspaceId: string}
}

const Layout = async ({params: { workspaceId }, children}: Props) => {
    const auth = await onAuthenticationUser()
    if(!auth.user?.workspace) redirect('/auth/sign-in')
    if(!auth.user.workspace.length) redirect('/auth/sign-in')
    const hasAccess = await verifyAccessToWorkspace(workspaceId)
    
    return <div>Layout</div>
}

export default Layout
