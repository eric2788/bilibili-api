import { defines, LoginSchema } from "@schemas/login";
import axios, { AxiosInstance } from "axios";

export class LoginClient {

    private readonly axios: AxiosInstance = axios.create({ withCredentials: true})

    async request<K extends keyof LoginSchema, Input extends LoginSchema[K]['input'], Output extends LoginSchema[K]['output']>(key: K, data: Input): Promise<Output> {
        const details = defines[key]
        const res = await this.axios.request({
            method: details.method,
            url: details.url,
            data,
            headers: {
                'Content-Type': details.contentType
            }
        })
        return res.data
    }

}

