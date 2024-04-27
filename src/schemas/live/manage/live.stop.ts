import { HttpSchema, HttpDefine, BaseResponse } from "@schemas/common"


export namespace LiveStop {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'POST',
        url: 'https://api.live.bilibili.com/room/v1/Room/stopLive',
        contentType: 'application/x-www-form-urlencoded'
    }

    type Input = {
        room_id: number
        csrf: string
    }

    type Output = BaseResponse<{
        change: number
        status: string
    }>

}