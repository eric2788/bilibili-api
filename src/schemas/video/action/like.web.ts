import { HttpSchema, HttpDefine, V1Response } from "@schemas/common"

export namespace WebLike {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'POST',
        url: 'https://api.bilibili.com/x/web-interface/archive/like',
        contentType: 'application/x-www-form-urlencoded'
    }

    type Input = {
        // either aid or bvid
        aid?: number
        bvid?: string
        like: number
        csrf: string
    }

    type Output = V1Response

}