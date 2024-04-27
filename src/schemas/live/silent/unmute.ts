import { HttpSchema, HttpDefine, V1Response } from "@schemas/common"



export namespace UnMute {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'POST',
        url: 'https://api.live.bilibili.com/banned_service/v1/Silent/del_room_block_user',
        contentType: 'application/x-www-form-urlencoded'
    }

    type Input = {
        room_id: number
        id: string
        csrf_token: string
        csrf: string
        visit_id?: string
    }

    type Output = V1Response
}