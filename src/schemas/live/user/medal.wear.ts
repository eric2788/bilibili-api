import { HttpSchema, HttpDefine, V1Response } from "@schemas/common"

export namespace MedalWear {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'POST',
        url: 'https://api.live.bilibili.com/xlive/web-room/v1/fansMedal/wear',
        contentType: 'multipart/form-data'
    }

    type Input = {
        medal_id: number
        csrf: string
        csrf_token: string
    }

    type Output = V1Response

}