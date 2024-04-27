import { HttpDefine, HttpSchema, V1Response } from "@schemas/common"

export namespace SignInfoLastMonth {

    export type Schema = HttpSchema<{}, Output>

    export const defines: HttpDefine = {
        method: 'GET',
        url: 'https://api.live.bilibili.com/sign/getLastMonthSignDays',
    }

    type Output = V1Response<SignInfoRes>

    type SignInfoRes = {
        days: number
        month: number
        hadSignDays: number
        signDaysList: number[]
        signBonusDaysList: number[]
    }
}