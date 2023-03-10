import axios from 'axios';
const fakeUrl = 'http://1206501-cm15232.tw1.ru'
export const AuthApi = {
    getClientsData() {
        return axios.get(`${fakeUrl}/api/client-data-driver`).then(res => res.data)
    },
    login(username:string,password:string) {
        return axios.post(`${fakeUrl}/api/auth/login`, {email:username,password:password}).then(res => res)
    },
    getUser() {
        return axios.get(`${fakeUrl}/api/auth/user`).then(res => res.data)
    },
}