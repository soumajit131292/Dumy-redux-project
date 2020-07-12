
import userData from '../../../service/userData'

export function getUserData() {
    return userData().then(response => {
        return response
    }).catch((error) => {
        return []
    })
}