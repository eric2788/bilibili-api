import { HttpSchema, HttpDefine, V1Response } from "@schemas/common"

export namespace RedPocket {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'GET',
        url: 'https://api.live.bilibili.com/xlive/lottery-interface/v1/lottery/getLotteryInfoWeb',
        params: ['roomid']
    }

    type Input = {
        roomid: number
    }

    type Output = V1Response<RedPocketRes>

    type RedPocketRes = {
        popularity_red_pocket: PocketInfo[]
    }

    type PocketInfo = {
    lot_id: number
    sender_uid: number
    sender_name: string
    sender_face: string
    join_requirement: number
    danmu: string
    awards: any[]
    lot_status: number
    h5_url: string
    user_status: number
    lot_config_id: number
    total_price: number
}
}