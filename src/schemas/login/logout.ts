import { CommonResponse, HttpDefine, HttpSchema } from "@schemas/common"

export namespace Logout {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'POST',
        url: 'https://passport.bilibili.com/login/exit/v2',
        contentType: 'application/x-www-form-urlencoded'
    }

    type Input = {
        biliCSRF: string
        gourl?: string
    }

    type Output = CommonResponse<{
        redirectUrl: string
    }> & { ts: number }

}