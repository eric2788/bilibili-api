import { HttpDefine, HttpSchema, V1Response } from "@schemas/common";

export namespace StreamMessage {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'GET',
        url: 'https://api.live.bilibili.com/xlive/web-room/v1/index/getDanmuInfo',
        params: ['id']
    }

    type Input = {
        id: number
    }

    type Output = V1Response<MessageRes>
    
    type MessageRes = {
        group: string
        business_id: number
        refresh_row_factor: number
        refresh_rate: number
        max_delay: number
        token: string
        host_list: HostList[]
    }

    type HostList = {
        host: string
        port: number
        wss_port: number
        ws_port: number
    }
}