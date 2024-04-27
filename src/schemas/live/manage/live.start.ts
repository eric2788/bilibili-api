import { BaseResponse, HttpDefine, HttpSchema } from "@schemas/common";

export namespace LiveStart {
    
    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'POST',
        url: 'https://api.live.bilibili.com/room/v1/Room/startLive',
        contentType: 'application/x-www-form-urlencoded'
    }

    type Input = {
        room_id: number
        area_v2: number
        platform: string
        csrf: string
    }

    type Output = BaseResponse<LiveResponse>

    type LiveResponse = {
        change: number
        status: string
        room_type: number
        rtmp: Rtmp
        protocols: Protocol[]
        try_time: string
        live_key: string
        notice: Notice
    }


    type Rtmp = {
        addr: string
        code: string
        new_link: string
        provider: string
    }

    type Protocol = {
        protocol: string
        addr: string
        code: string
        new_link: string
        provider: string
    }

    type Notice = {
        type: number
        status: number
        title: string
        msg: string
        button_textx: string
        button_url: string
    }
}