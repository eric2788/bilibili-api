import { HttpSchema, HttpDefine, V1Response } from "@schemas/common"

export namespace AppCoin {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'POST',
        url: 'https://app.bilibili.com/x/v2/view/coin/add',
        contentType: 'application/x-www-form-urlencoded'
    }

    type Input = {
        access_key: string
        aid: string
        multiply: number
        select_like?: number
    }

    type Output = V1Response<{
        like: boolean
    }>


}
