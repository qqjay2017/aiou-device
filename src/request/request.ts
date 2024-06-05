import { createLoginRequest } from '@core/shared'

const request = createLoginRequest()
export function postOpenApi(newUrl = "", data = {}) {
    return request(newUrl, {
        method: 'post',
        data,
    })
}