import { HttpSchema, HttpDefine, V1Response } from "@schemas/common"

export namespace WebShare {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'POST',
        url: 'https://api.bilibili.com/x/web-interface/share/add',
        contentType: 'application/x-www-form-urlencoded'
    }

    type Input = {
        // either aid or bvid
        aid?: number
        bvid?: string
        csrf: string
    }

    type Output = V1Response<number>

}