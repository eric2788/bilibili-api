import { HttpDefine, HttpSchema, V1Response } from "@schemas/common"


export namespace ScanTv {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'POST',
        url: 'https://passport.bilibili.com/x/passport-tv-login/qrcode/poll',
        contentType: 'application/x-www-form-urlencoded'
    }

    type Input = {
        appkey: string
        local_id: number
        ts: number
        sign: string
        mobi_app: string
    }

    type Output = V1Response<{
        url: string
        auth_code: string
    }>
}