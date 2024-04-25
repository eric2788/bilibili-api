import { HttpSchema, HttpDefine, V1Response } from "@schemas/common"

export namespace AppLike {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'POST',
        url: 'https://app.bilibili.com/x/v2/view/like',
        contentType: 'application/x-www-form-urlencoded'
    }

    type Input = {
        access_key: string
        aid: string
        like: number
    }

    type Output = V1Response

}