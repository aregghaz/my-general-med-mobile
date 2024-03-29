import axios from 'axios';
import {fakeUrl} from "./fakeUrl";

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