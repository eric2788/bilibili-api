import { HttpDefine, HttpSchema, V1Response } from "@schemas/common"

export namespace Required {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'GET',
        url: 'https://passport.bilibili.com/x/passport-login/web/cookie/info',
        params: ['csrf']
    }

    type Input = {
        csrf: string
    }

    type Output = V1Response<{
        refresh: boolean
        timestamp: number
    }>
}