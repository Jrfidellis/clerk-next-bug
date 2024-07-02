// this import causes the error, commenting it out fixes the error
import { createMessage } from '../chat'

export const conversation = (ws: any, type: string, data: any) => {
    switch (type) {
        case 'createMessage':
            createMessage()
    }
}