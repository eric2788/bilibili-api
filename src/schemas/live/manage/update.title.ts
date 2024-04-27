import { BaseResponse, HttpDefine, HttpSchema } from "@schemas/common";

export namespace UpdateTitle {
    
    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'POST',
        url: 'https://api.live.bilibili.com/room/v1/Room/update',
        contentType: 'application/x-www-form-urlencoded'
    }

    type Input = {
        room_id: number
        title: string
        csrf: string
        csrf_token: string
    }

    type Output = BaseResponse<[]>

}