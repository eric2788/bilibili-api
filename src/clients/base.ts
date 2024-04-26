
import { HttpDefine } from "@schemas/common"
import { AxiosInstance, AxiosRequestConfig } from "axios"
import mitt from "mitt"

export type RequestConfig = AxiosRequestConfig & {
    noEmit?: boolean
}

export abstract class BaseClient<Schema> {

    protected readonly emitter = mitt()
    constructor(protected readonly axios: AxiosInstance) { }

    protected abstract get defines(): Record<keyof Schema, HttpDefine>

    protected async emit(key: keyof Schema, data: object = undefined, options: RequestConfig = {}): Promise<any> {
        const details = this.defines[key]
        const url = details.url
            .formatPath(data)
            .formatQuery(details.params ?? [], data)
        const res = await this.axios.request({
            ...options,
            method: details.method,
            url,
            data,
            headers: {
                ...options.headers,
                'Content-Type': details.contentType
            }
        })
        if (!options.noEmit) {
            this.emitter.emit(key as string, res.data)
        }
        return res.data
    }

    protected on(key: string, handler: (data: any) => void) {
        this.emitter.on(key, handler)
    }

    protected off(key: string, handler: (data: any) => void) {
        this.emitter.off(key, handler)
    }
}