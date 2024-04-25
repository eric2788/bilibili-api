import { HttpDefine, HttpSchema, V1Response } from "@schemas/common";


export namespace Refresh {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'POST',
        url: 'https://passport.bilibili.com/x/passport-login/web/cookie/refresh',
        contentType: 'application/x-www-form-urlencoded'
    }

    type Input = {
        csrf: string
        refresh_csrf: string
        source: string
        refresh_token: string
    }

    type Output = V1Response<{
        status: number
        message: string
        refresh_token: string
    }>
}