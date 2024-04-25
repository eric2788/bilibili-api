import { HttpSchema, HttpDefine, V1Response } from "@schemas/common"

export namespace AppDislike {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'POST',
        url: 'https://app.biliapi.net/x/v2/view/dislike',
        contentType: 'application/x-www-form-urlencoded'
    }

    type Input = {
        access_key: string
        aid: string
        dislike: number
    }

    type Output = V1Response

}