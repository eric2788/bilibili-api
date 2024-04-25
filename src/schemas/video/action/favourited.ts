import { HttpSchema, HttpDefine, V1Response } from "@schemas/common"

export namespace Favourited {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'GET',
        url: 'hhttps://api.bilibili.com/x/v2/fav/video/favoured',
        contentType: 'application/x-www-form-urlencoded'
    }

    type Input = {
        access_key?: string
        aid?: number | string
    }

    type Output = V1Response<{
        count: number
        favoured: boolean
    }>

}
