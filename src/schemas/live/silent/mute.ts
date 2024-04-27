import { HttpSchema, HttpDefine, V1Response } from "@schemas/common"


export namespace Mute {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'POST',
        url: 'https://api.live.bilibili.com/xlive/web-ucenter/v1/banned/AddSilentUser',
        contentType: 'application/x-www-form-urlencoded'
    }

    type Input = {
        room_id: number
        tuid: number
        msg?: string
        mobile_app: 'web'
        csrf_token: string
        csrf: string
        visit_id?: string
    }

    type Output = V1Response
    
}