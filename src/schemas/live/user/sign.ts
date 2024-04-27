import { HttpSchema, HttpDefine, V1Response } from "@schemas/common"


export namespace Sign {

    export type Schema = HttpSchema<{}, Output>

    export const defines: HttpDefine = {
        method: 'GET',
        url: 'https://api.live.bilibili.com/xlive/web-ucenter/v1/sign/DoSign',
    }

    type Output = V1Response

}