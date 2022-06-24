import { BACKEND_DOMAIN } from '../config'
export const postData = async (url, data) => {
    const resp = await fetch(`${BACKEND_DOMAIN}${url}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    return resp;
}
export const getData = async (url) => {
    const resp = await fetch(`${BACKEND_DOMAIN}${url}`);
    const data = await resp.json();
    return data;
}