import { HttpSchema, HttpDefine, V1Response } from "@schemas/common"

export namespace SignInfo {

    export type Schema = HttpSchema<{}, Output>

    export const defines: HttpDefine = {
        method: 'GET',
        url: 'https://api.live.bilibili.com/xlive/web-ucenter/v1/sign/WebGetSignInfo',
    }

    type Output = V1Response<SignInfoRes>

    type SignInfoRes = {
        text: string
        specialText: string
        status: number // 0: 未签到, 1: 已签到
        allDays: number
        curMonth: number
        curYear: number
        curDay: number
        curData: string
        hadSignDays: number
        newTask: number
        signDaysList: number[]
        signBonusDaysList: number[]
    }

}