import { HttpSchema, HttpDefine, V1Response } from "@schemas/common"

export namespace Favourite {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'POST',
        url: 'https://api.bilibili.com/x/v3/fav/resource/deal',
        contentType: 'application/x-www-form-urlencoded'
    }

    type Input = {
        // required when app
        access_key?: string
        rid: number
        type: number
        add_media_ids?: number[]
        del_media_ids?: number[]
        // required when web
        csrf?: string
    }

    type Output = V1Response<{
        prompt: boolean
    }>
}
