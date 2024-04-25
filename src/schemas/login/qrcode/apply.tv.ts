import { HttpDefine, HttpSchema, V1Response } from "@schemas/common";

export namespace ApplyTv {

    export type Schema = HttpSchema<never, Output>

    export const defines: HttpDefine = {
        method: 'GET',
        url: 'https://passport.bilibili.com/x/passport-tv-login/qrcode/auth_code',
    }

    type Output = V1Response<{
        url: string
        auth_code: string
    }>
}