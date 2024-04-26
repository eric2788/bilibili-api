import { HttpDefine, HttpSchema, V1Response } from "@schemas/common";


export namespace User {

    export type Schema = HttpSchema<Input, Output>
    
    export const defines: HttpDefine = {
        method: 'GET',
        url: 'https://api.live.bilibili.com/room/v1/Room/getRoomInfoOld',
        params: ['mid']
    }

    type Input = {
        mid: number
    }

    type Output = V1Response<{
        roomStatus: number
        roundStatus: number
        live_status: number
        url: string
        title: string
        cover: string
        online: number
        roomid: number
        broadcast_type: number
        online_hidden: number
    }>

}