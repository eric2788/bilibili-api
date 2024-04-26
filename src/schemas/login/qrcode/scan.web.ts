import { CommonResponse, HttpDefine, HttpSchema } from "@schemas/common"


export namespace ScanWeb {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'GET',
        url: 'https://passport.bilibili.com/x/passport-login/web/qrcode/poll',
        params: ['qrcode_key']
    }

    type Input = {
        qrcode_key: string
    }

    type Output = CommonResponse<{
        url: string
        refresh_token: string
        timestamp: number
        code: number
        message: string
    }>
}