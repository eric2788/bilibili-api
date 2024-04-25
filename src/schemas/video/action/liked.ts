import { HttpSchema, HttpDefine, V1Response } from "@schemas/common"

export namespace Liked {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'GET',
        url: 'https://api.bilibili.com/x/web-interface/archive/has/like',
        contentType: 'application/x-www-form-urlencoded'
    }

    type Input = {
        access_key?: string
        // either aid or bvid
        aid?: number
        bvid?: string
    }

    type Output = V1Response<number>

}