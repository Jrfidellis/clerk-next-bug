'use server'
import { auth } from '@clerk/nextjs/server'

// in my real app, this is a server action called inside src/app/chats/page.tsx

export const getChat = async () => {
    auth // referenced here just so that the import doesn't get removed by the bundler
}

// this is called by the websocket server, see src/server/services/websocket/conversation.ts
export const createMessage = async () => {

}