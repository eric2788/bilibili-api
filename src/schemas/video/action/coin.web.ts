import { HttpSchema, HttpDefine, V1Response } from "@schemas/common"

export namespace WebCoin {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'POST',
        url: 'https://api.bilibili.com/x/web-interface/coin/add',
        contentType: 'application/x-www-form-urlencoded'
    }

    type Input = {
        // either aid or bvid
        aid?: number
        bvid?: string
        multiply: number
        select_like?: number
        csrf: string
    }

    type Output = V1Response<{
        like: boolean
    }>
}