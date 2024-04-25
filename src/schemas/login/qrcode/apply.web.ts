import { HttpDefine, HttpSchema, V1Response } from "@schemas/common";

export namespace ApplyWeb {

    export type Schema = HttpSchema<never, Output>

    export const defines: HttpDefine = {
        method: 'GET',
        url: 'https://passport.bilibili.com/x/passport-login/web/qrcode/generate',
    }

    type Output = V1Response<{
        url: string
        qrcode_key: string
    }>

}