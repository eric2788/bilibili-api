import { HttpSchema, HttpDefine, V1Response } from "@schemas/common"

export namespace WebTriple {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'POST',
        url: 'https://api.bilibili.com/x/web-interface/archive/like/triple',
        contentType: 'application/x-www-form-urlencoded'
    }

    type Input = {
        aid?: number
        bvid?: string
        csrf: string
    }

    type Output = V1Response<{
        like: boolean
        coin: boolean
        fav: boolean
        multiply: number
    }>
}