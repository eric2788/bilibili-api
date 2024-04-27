import { HttpSchema, HttpDefine, V1Response } from "@schemas/common"



export namespace List {

    export type Schema = HttpSchema<Input, Output>

    export const defines: HttpDefine = {
        method: 'GET',
        url: 'https://api.live.bilibili.com/xlive/web-ucenter/v1/banned/GetSilentUserList',
        contentType: 'application/x-www-form-urlencoded'
    }

    type Input = {
        room_id: number
        ps1: string
        csrf_token: string
        csrf: string
        visit_id?: string
    }

    type Output = V1Response<{
        data: MuteUser[]
        total: number
        total_page: number
    }>

    type MuteUser = {
        tuid: number
        tname: string
        uid: number
        name: string
        ctime: string
        id: number
        is_anchor: number
        face: string
        admin_level: number
    }
}