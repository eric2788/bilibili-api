import { HttpSchema, HttpDefine, V1Response } from "@schemas/common"

export namespace UpdateNews {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'POST',
        url: 'https://api.live.bilibili.com/xlive/app-blink/v1/index/updateRoomNewss',
        contentType: 'application/x-www-form-urlencoded'
    }

    type Input = {
        room_id: number
        uid: number
        content: string
        csrf: string
        csrf_token: string
    }

    type Output = V1Response

}