import { HttpSchema, HttpDefine, V1Response } from "@schemas/common"

export namespace AppTriple {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'POST',
        url: 'https://app.bilibili.com/x/v2/view/like/triple',
        contentType: 'application/x-www-form-urlencoded'
    }

    type Input = {
        access_key: string
        aid: string
    }

    type Output = V1Response<{
        like: boolean
        coin: boolean
        fav: boolean
        multiply: number
    }>
}